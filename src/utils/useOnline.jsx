import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);

  //Whenever my page loads it should track once
  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };
    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener("online", () => {
      handleOnline;
    });
    window.addEventListener("offline", () => {
      handleOffline;
    });

    return () => {
      window.removeEventListener("online", () => {
        handleOnline;
      });
      window.removeEventListener("offline", () => {
        handleOffline;
      });
    };
  }, []);

  //it will be returning boolen value,
  return isOnline;
};

export default useOnline;
