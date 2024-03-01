import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


const ForgotPassword = () => {

  const forgotPasswordAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 50,
    config: { duration: 400 },
  });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };



  return (
    <animated.div
      style={forgotPasswordAnimation}
      className="flex items-center justify-center h-screen pl-16 sm:pl-0 mx-auto"
    >
      <form className="text-white border-2 rounded-2xl p-16 w-64 sm:w-[25rem] md:w-[32rem] lg:w-[39rem]" onSubmit={handleSubmit}>
        <label className="text-lg p-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-5 rounded-lg border-2 border-gray-900 px-2"
        />
        <button className="btn btn-outline" type="submit">
          Recover password
        </button>
        {message && <p className="text-green-500 mt-2">{message}</p>}
      </form>
    </animated.div>
  );
};

export default ForgotPassword;
