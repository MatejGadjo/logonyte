import React from "react";
import "./FAQFull.css";
import { useResponsive } from "../../custom hooks/useResponsive";

const InfoUsFull = () => {

    const isMobile = useResponsive();

    return (
        <div>
            {isMobile ? (
                <div id="infoUsFull" className="py-6 pl-16 sm:pl-0">
                    <div className="mx-auto max-w-7xl px-6 py-20 ">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white-900">About Us</h2>
                            <dl className="mt-10 space-y-6 divide-y divide-white-900/10">
                                <div className="flex w-full items-start justify-between text-left text-white-900">
                                    <p className="text-base font-normal leading-7">Welcome to our logo wonderland! At [Your Company Name], we are passionate about the art of crafting captivating logos that leave a lasting impression. Our team of dedicated logo wizards works tirelessly, infusing magic into each design, one masterpiece at a time.
                                        We believe that a well-designed logo is more than just a symbol; it's a powerful storytelling tool that speaks volumes about your brand's identity. Our mission is to help businesses, big or small, stand out from the crowd with logos that are not only visually striking but also meaningful and memorable.
                                    </p>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="infoUsFull" className="py-6 pl-16 sm:pl-0">
                    <div className="mb-10 border-4 rounded-xl mt-24 w-64 background-reversed mx-auto sm:w-[25rem] md:w-[32rem] lg:w-[39rem] xl:w-[60rem] 2xl:w-[70rem]">
                        <div className="mx-auto max-w-7xl px-6 py-20 ">
                            <div className="mx-auto max-w-4xl">
                                <h2 className="text-2xl font-bold leading-10 tracking-tight text-white-900">About Us</h2>
                                <dl className="mt-10 space-y-6 divide-y divide-white-900/10">
                                    <div className="flex w-full items-start justify-between text-left text-white-900">
                                        <p className="text-base font-normal leading-7">Welcome to our logo wonderland! At [Your Company Name], we are passionate about the art of crafting captivating logos that leave a lasting impression. Our team of dedicated logo wizards works tirelessly, infusing magic into each design, one masterpiece at a time.
                                            We believe that a well-designed logo is more than just a symbol; it's a powerful storytelling tool that speaks volumes about your brand's identity. Our mission is to help businesses, big or small, stand out from the crowd with logos that are not only visually striking but also meaningful and memorable.
                                            Whether you're starting a new venture or revamping your existing brand, we're here to guide you through the creative journey. Click around to explore the secrets behind our enchanting creations and let's weave some logo magic together!</p>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default InfoUsFull;
