import { createContext, useState, useEffect } from "react";
import { getSession } from "../services/authData";
// Create a context with a default value
const SessionContext = createContext({
  user: null,
  setUser: () => {},
});

// A provider component to wrap your entire app
const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchSession = async () => {
      try {
        const response = await getSession();
        if (!ignore) {
          setUser(response.data.user); // Assuming the session API returns user data
        }
      } catch (error) {
        // Handle error, e.g., user is not authenticated
        console.error("Error fetching session:", error);
      }
    };

    // Fetch session when SessionProvider mounts
    fetchSession();

    return () => {
      ignore = true;
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };
