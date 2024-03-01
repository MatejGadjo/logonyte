import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import ProfileModal from "../Modal/ProfileModal";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";


const ProfileComp = () => {

    const profileCompAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 50,
        config: { duration: 400 },
    });

    const { user } = useContext(UserContext)

    const [showProfileModal, setShowProfileModal] = useState(true);

    let username = '';
    let email = '';


    useEffect(() => {
        if (user !== null) {
            setShowProfileModal(false);
        }
    }, [user]);


    if (user !== null) {
        username = user.username;
        email = user.email;
    }


    return (
        <animated.div
            style={profileCompAnimation}
            className="flex justify-center"
        >
            <div className="flex flex-col items-center pl-16 sm:pl-0 mx-auto">
                <h1 className="mt-10 mb-10 text-center title_text text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"><span className="magic font-extrabold"> Logo</span>Nist</h1>
                <div className="flex items-center justify-center border-2 rounded-2xl p-16 w-64 sm:w-[25rem] md:w-[32rem] lg:w-[39rem]">
                    <form>
                        <label className="p-2 text-xl">Username</label>
                        <input type="text" value={username} disabled className="cursor-text mb-5 rounded-lg border-2 border-gray-900 px-2 text-center" />
                        <label className="p-2 text-xl">Email</label>
                        <input type="email" value={email} disabled className="cursor-text mb-5 rounded-lg border-2 border-gray-900 px-2 text-center" />
                        <label className="p-2 text-xl">Password</label>
                        <input type="password" value={'#########'} disabled className="cursor-text mb-5 rounded-lg border-2 border-gray-900 px-2 text-center" />
                        <Link to="/changepassword" className="btn btn-ghost btn-xs mb-5"><u>Change password</u></Link>
                    </form>
                </div>
            </div>
            {showProfileModal && <ProfileModal />}
        </animated.div>
    )
}

export default ProfileComp;