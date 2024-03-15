import React from "react";
import { IoLogoInstagram, IoLogoTwitter, IoLogoPinterest } from "react-icons/io5";
import { Link } from "react-router-dom";
import knight from '../Images/color1.png'



const Footer = () => {

    return (
        <>
            <div id="footerScroll" className="pl-16 sm:pl-0">
                <div className="divider w-64 mx-auto sm:w-[27rem] md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[65rem]"></div>

                <footer className="grid grid-flow-row gap-y-10 gap-x-4 text-sm md:footer text-base-content bottom-0 w-64 mx-auto sm:w-[27rem] md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[65rem]">
                    <div className="gap-2">
                        <div className="flex justify-center">
                            <img width="50" height="50" src={knight} alt="knight"/>
                            <p className="pl-2 pt-1">LogoNyte, Inc.<br />Providing pixelperfect logos since 2023</p>

                        </div>
                        <div className="flex justify-center mt-4">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer"><IoLogoInstagram size={20} /></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer ml-3"><IoLogoTwitter size={20} /></a>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer ml-3"><IoLogoPinterest size={20} /></a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="footer-title">Navigation</span>
                        <Link to="/" className="cursor-pointer hover:underline focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2">Home</Link>
                        <Link to="/customlogo" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Custom logo</Link>
                        <Link to="/catalog" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Catalog</Link>
                        <Link to="/donate" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Donate</Link>
                        <Link to="/aboutus" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">About us</Link>
                        <Link to="/profile" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Profile</Link>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="footer-title">Legal</span>
                        <Link to="/terms-conditions" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Terms of Service</Link>
                        <Link to="/privacy-policy" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Privacy Policy</Link>
                        <Link to="/cookie-policy" className="cursor-pointer focus:outline-2 focus:outline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 link-hover">Cookie Policy</Link>
                    </div>
                </footer>
                <div className="divider w-64 sm:w-[27rem] mx-auto md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[65rem]"></div>
                <div className="pb-4 w-64 mx-auto text-center sm:w-96 md:w-[33rem]">
                    <p>All trademarks are property of their respective owners</p>
                    <p>© Logonyte, Inc. • 2023</p>
                </div>
            </div>
        </>
    )
}


export default Footer;

