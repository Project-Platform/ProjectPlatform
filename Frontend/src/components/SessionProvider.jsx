import { createContext, useState, useEffect } from "react";
import { getSession } from "../services/authData";
import { Spinner } from "@material-tailwind/react";
// Create a context with a default value
const SessionContext = createContext({
  user: null,
  setUser: () => {},
});

// A provider component to wrap your entire app
const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    let timeoutId

    const fetchSessionAndDelay = async () => {
      try {
        const response = await getSession();
        if (!ignore) {
          setUser(response.user);
          // Introduce a delay after setting the user
          timeoutId = setTimeout(() => {
            setLoading(false);
          }, 50);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSessionAndDelay();

    return () => {
      ignore = true;
      clearTimeout(timeoutId)
    };
  }, []);

  if (loading) {
    // You can render a loading state here
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };
