import React, { useContext, useState } from "react";
import './SideBar.css';
import { IoHomeOutline, IoBagOutline, IoLogOutOutline, IoLogInOutline, IoPersonOutline, IoBuildOutline, IoLogoPinterest, IoClose, IoMenu, IoBusinessOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { UserContext } from "../../UserContext";
import "../AboutUs/FAQFull.css";

const SideBar = ({ children }) => {

    const { user } = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItemsWhenLoggedIn = [
        {
            path: "/",
            name: "Home",
            icon: <IoHomeOutline size={24} />
        },
        {
            path: "/customlogo",
            name: "CustomLogo",
            icon: <IoBuildOutline size={24} />
        },
        {
            path: "/catalog",
            name: "Catalog",
            icon: <IoBagOutline size={24} />
        },
        {
            path: "/donate",
            name: "Donate",
            icon: <IoLogoPinterest size={24} />
        },
        {
            path: "/aboutus",
            name: "Information",
            icon: <IoBusinessOutline size={24} />
        },
        {
            path: "logout",
            name: "Logout",
            icon: <IoLogOutOutline size={24} />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <IoPersonOutline size={24} />
        },
    ];

    const menuItemsWhenLoggedOut = [
        {
            path: "/",
            name: "Home",
            icon: <IoHomeOutline size={24} />
        },
        {
            path: "/customlogo",
            name: "Custom Logo",
            icon: <IoBuildOutline size={24} />
        },
        {
            path: "/catalog",
            name: "Catalog",
            icon: <IoBagOutline size={24} />
        },
        {
            path: "/donate",
            name: "Donate",
            icon: <IoLogoPinterest size={24} />
        },
        {
            path: "/aboutus",
            name: "Information",
            icon: <IoBusinessOutline size={24} />
        },
        {
            path: "login",
            name: "Login",
            icon: <IoLogInOutline size={24} />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <IoPersonOutline size={24} />
        },
    ];

    const menuItem = user ? menuItemsWhenLoggedIn : menuItemsWhenLoggedOut


    return (
        <div className="flex">
            <div className={`text-white h-screen transition-all duration-300 flex flex-col sm:sticky top-0 fixed background-reversed z-50
            ${isOpen ? "w-5/6 sm:w-64" : "w-16"}`
            }>
                <div className="flex items-center p-5">
                    <div className="flex cursor-pointer">
                        {isOpen ? <IoClose size={24} onClick={toggle} /> : <IoMenu size={24} onClick={toggle} />}
                    </div>
                </div>
                {
                    menuItem.map((item, index) => {
                        return (
                            <NavLink to={item.path} key={index} className="flex text-white p-5 gap-4 transition-all duration-300
                                rounded-xl mt-2 mb-2 shadow-lg ease-in no-underline
                              hover:bg-purple-600 hover:text-white hover:transition-all hover:duration-300 
                              hover:rounded-3xl hover:shadow-lg link"
                                activeclassName="active">
                                <div className="">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text whitespace-nowrap">{item.name}</div>
                            </NavLink>
                        )
                    })
                }

            </div>
            <main>{children}</main>
        </div>
    )
}


export default SideBar;