import React from "react";

const ReviewCard = ({ picture, username, star, text }) => {
    return (
        <div className="pl-16 sm:pl-0 mx-auto ">
            <div className="border w-64 h-72 p-4 sm:w-[20rem] md:w-[15rem] xl:w-[16rem]">
                <div className="flex">
                    <img className="w-16 h-16 mr-5 mb-5" src={picture} alt={username} />
                    <h1 className="text-xl mt-4 font-semibold leading-normal">{username}</h1>
                </div>
                <div className="flex gap-1 mb-4">
                    <div className="text-yellow-400">{star}</div>
                    <div className="text-yellow-400">{star}</div>
                    <div className="text-yellow-400">{star}</div>
                    <div className="text-yellow-400">{star}</div>
                    <div className="text-yellow-400">{star}</div>
                </div>
                <div>
                    <p className="font-medium">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
