import React from "react";

const BenefitCard = ({ icon, title, text }) => {
    return (
        <div className="flex justify-center">
            <div className="border-2 p-3 h-11 rounded-xl bg-purple-600 text-white border-white mr-5">{icon}</div>
            
            <div className="w-52 sm:w-[20rem] md:w-[18rem] xl:w-[14rem] mb-4 mt-1">
                <h1 className="text-xl mb-5 font-semibold leading-8 w-60 xl:tracking-tight">{title}</h1>
                <p className="">{text}</p>
            </div>
        </div>
    );
};

export default BenefitCard;