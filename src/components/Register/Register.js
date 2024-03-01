import React, { useContext, useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Cookies from "js-cookie";
import { useSpring, animated } from "react-spring";


const Register = () => {

    const registerAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 50,
        config: { duration: 400 },
    });

    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "unable to register") {
                    console.log("Invalid credentials");
                    // Handle unsuccessful login
                } else {
                    // Successful login
                    setUser(data);
                    Cookies.set('user', JSON.stringify(data), { expires: 7 })
                    navigate("/");
                }
            })
            .catch((err) => {
                console.error("Error", err)
            })

    }

    return (
        <animated.div
            style={registerAnimation}
            className="flex justify-center h-screen"
        >
            <div className="flex flex-col items-center pl-16 sm:pl-0 mx-auto">
                <h1 className="mt-10 mb-10 text-center title_text" style={{ fontSize: "clamp(2em, 2vw, 4em)" }}><span className="magic"> Register</span></h1>
                <div className="flex items-center justify-center border-2 w-64 rounded-2xl h-[26rem] sm:w-[25rem] md:w-[32rem] lg:w-[39rem]">
                    <form onSubmit={handleSubmit}>
                        <label className="label_style">Username</label>
                        <input type="text" value={username} onChange={onUsernameChange} className="mb-5 rounded-lg border-2 border-gray-900 px-2" />
                        <label className="label_style">Email</label>
                        <input type="email" value={email} onChange={onEmailChange} className="mb-5 rounded-lg border-2 border-gray-900 px-2" />
                        <label className="label_style">Password</label>
                        <input type="password" value={password} onChange={onPasswordChange} className="mb-5 rounded-lg border-2 border-gray-900 px-2" />
                        <button className="btn btn-outline">Register</button>
                        <Link to="/login" className="btn btn-ghost btn-sm mt-5"><u>Already have an account? LogIn</u></Link>
                    </form>
                </div>
            </div>
        </animated.div>
    )
}

export default Register;
