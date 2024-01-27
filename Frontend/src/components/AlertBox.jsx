import { useState, useEffect } from "react";
import { Alert } from "@material-tailwind/react";

const AlertBox = ({ type, message, onClose}) => {
  const [isVisible, setIsVisible] = useState(true);
  let color;
  if (type==="success"){
    color = "green"
  }
  else if (type==="info"){
    color = "blue"
  }
  else{
    color = "red"
  }
  const closeAlertBox = () =>{
    setIsVisible(false)
    onClose(null)
  }


  useEffect(() => {
    window.scrollTo({ top: 0 });
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
        <div className=" flex justify-center">
          <Alert
            variant="gradient"
            color={color}
            onClose={closeAlertBox}
            className="flex justify-center min-w-80 max-w-lg absolute mt-4 z-50"
          >
            {message}
          </Alert>
        </div>
      )}
    </>
  );
};

export default AlertBox;
