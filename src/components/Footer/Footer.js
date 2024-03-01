import React from "react";
import { IoLogoInstagram, IoLogoTwitter, IoLogoPinterest } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <>
            <div id="footerScroll" className="pl-16 sm:pl-0">
                <div className="divider w-64 mx-auto sm:w-[27rem] md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[65rem]"></div>

                <footer className="grid grid-flow-row gap-y-10 gap-x-4 text-sm md:footer text-base-content bottom-0 w-64 mx-auto sm:w-[27rem] md:w-[35rem] lg:w-[45rem] xl:w-[55rem] 2xl:w-[65rem]">
                    <div className="gap-2">
                        <div className="flex justify-center">
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                            <p className="pl-2">LogoNyte, Inc.<br />Providing pixelperfect logos since 2023</p>

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

