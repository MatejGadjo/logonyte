import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useSpring, animated } from "react-spring";
import ChangePasswordModal from "../Modal/ChangePasswordModal";


const ChangePassword = () => {

    const changePasswordAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 50,
        config: { duration: 400 },
    });

    const { user } = useContext(UserContext);

    const [showChangePasswordModal, setShowChangePasswordModal] = useState(true);

    useEffect(() => {
        if (user !== null) {
            setShowChangePasswordModal(false);
        }
    }, [user]);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            setMessage("New passwords do not match.")
            return;
        }

        fetch("http://localhost:3000/changepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ oldPassword, newPassword, email: user.email }),
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
            style={changePasswordAnimation}
            className="flex items-center justify-center h-screen pl-16 sm:pl-0 mx-auto"
        >
            <div className="w-64 flex items-center justify-center sm:w-[25rem] md:w-[32rem] lg:w-[39rem] border-2 rounded-2xl p-10">
                <form className="text-white" onSubmit={handleSubmit}>
                    <label className="p-2">Old Password</label>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="mb-5 rounded-lg border-2 border-gray-900 px-2"
                    />
                    <label className="p-2">New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="mb-2 rounded-lg border-2 border-gray-900 px-2"
                    />

                    <label className="p-2">Confirm New Password</label>
                    <input
                        type="password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="mb-5 rounded-lg border-2 border-gray-900 px-2"
                    />
                    <button className="btn btn-outline" type="submit">
                        Change password
                    </button>
                    {message && <p className="text-green-500 mt-2">{message}</p>}
                </form>
            </div>
            {showChangePasswordModal && <ChangePasswordModal />}
        </animated.div>
    );
};

export default ChangePassword;
