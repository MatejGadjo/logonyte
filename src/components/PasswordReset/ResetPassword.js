import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the new password and token to the backend to update the password
    fetch("http://localhost:3000/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password }),
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
    <div className="flex items-center justify-center h-screen">
      <form className="text-white border-2 rounded-2xl p-16" onSubmit={handleSubmit}>
        <label className="text-lg p-2">New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-5 rounded-lg border-2 border-gray-900 px-2"
        />
        <button className="btn btn-outline" type="submit">
          Reset Password
        </button>
        {message && <p className="text-green-500 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
