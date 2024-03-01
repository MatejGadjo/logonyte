import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SubmitFailModal = ({ closeModal }) => {

    const navigate = useNavigate();


    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pl-16">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[13rem] sm:w-[15rem] md:w-[25rem] lg:w-full bg-gray-800 outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-600 rounded-t">
                            <h3 className="text-3xl font-semibold text-slate-300">
                                Error!
                            </h3>
                            <button
                                className="btn rounded bg-black border-0 float-right leading-none outline-none focus:outline-none "
                                onClick={closeModal} 
                            >
                                <IoCloseOutline size={22} />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-300 text-lg">
                                You must be logged in to submit a custom logo.
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-4 border-t border-solid border-slate-600 rounded-b">
                            <button
                                className="btn text-red-500  font-bold px-6 py-2 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default SubmitFailModal;
