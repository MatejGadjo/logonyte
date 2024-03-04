import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Perform the logout action
    setUser(null);
    Cookies.remove("user")
    // Set a timeout to hide the text after 3 seconds
    const timeout = setTimeout(() => {
      setShowText(false);
      navigate("/login");
    }, 800);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [setUser, navigate]);

  return (
    <div>
      {showText && <p className="h-screen flex items-center justify-center text-4xl sm:text-6xl pl-20 mx-auto sm:mx-auto w-64 sm:w-[25rem] md:w-[32rem] lg:w-[39rem]">Logging out...</p>}
    </div>
  );
};

export default Signout;
