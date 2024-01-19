import { useState, useEffect } from "react";
import { Alert } from "@material-tailwind/react";

const AlertBox = ({ type, message, onClose}) => {
  const [isVisible, setIsVisible] = useState(true);
    let color
  if (type=="success"){
    color = "green"
  }
  else{
    color = "red"
  }
  const closeAlertBox = () =>{
    setIsVisible(false)
    onClose(null)
  }

  useEffect(() => {
    // Automatically hide the alert after a certain duration (e.g., 5 seconds)
    const timeout = setTimeout(() => {
      closeAlertBox()
    }, 5000);
    // Clear the timeout when the component is unmounted or when the alert is closed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="flex justify-center mt-2">
          <Alert
            variant="gradient"
            color={color}
            onClose={closeAlertBox}
            className="flex justify-center w-80"
          >
            {message}
          </Alert>
        </div>
      )}
    </>
  );
};

export default AlertBox;
