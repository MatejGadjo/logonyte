import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Cookies from "js-cookie";
import { useSpring, animated } from "react-spring";


const Signin = () => {

    const logInAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 50,
        config: { duration: 400 },
    });

    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((user) => {
                if (user.id) {
                    // Successful login
                    setUser(user);
                    Cookies.set('user', JSON.stringify(user), { expires: 7 })
                    navigate("/");
                } else {
                    // Handle unsuccessful login
                    setMessage("Invalid password or username");
                    console.log("Invalid credentials");
                }
            })
            .catch((err) => {
                console.error("Error", err)
            })
    }

    return (
        <animated.div style={logInAnimation} className="flex justify-center h-screen">
            <div className="flex flex-col items-center mt-24 sm:my-0 pl-16 mx-auto sm:pl-0">
                <h1 className="mt-10 mb-10 text-center title_text text-3xl xl:text-4xl font-semibold"><span className="magic font-extrabold"> Log</span>In</h1>
                <div className="flex items-center justify-center border-2 rounded-2xl p-16 w-64 sm:w-[25rem] md:w-[32rem] lg:w-[39rem]">
                    <form onSubmit={handleSubmit}>
                        <label className="p-2 text-xl">Email</label>
                        <input type="email" value={email} onChange={onEmailChange} className="mb-5 rounded-lg border-2 border-gray-900 px-2" />
                        <label className="p-2 text-xl">Password</label>
                        <input type="password" value={password} onChange={onPasswordChange} className="mb-2 rounded-lg border-2 border-gray-900 px-2" />
                        {message && <p className="text-red-500">{message}</p>}
                        <Link to="/forgotpassword" className="btn btn-ghost btn-xs mb-5"><u>Forgot your password?</u></Link>
                        <button className="btn btn-outline" type="submit">LogIn</button>
                        <Link to="/register" className="btn btn-ghost btn-sm mt-5"><u>Don't have an account? Register</u></Link>
                    </form>
                </div>
            </div>
        </animated.div>
    )
}

export default Signin;
