import React from "react";
import BenefitCard from "../BenefitCard/BenefitCard";
import { IoStar, IoLogoUsd } from "react-icons/io5";
import { TbFileTypeSvg } from "react-icons/tb";
import { FaImages } from "react-icons/fa6";
import { FaSearchDollar, FaMagic, FaBullhorn } from "react-icons/fa";
import ReviewCard from "../ReviewCard/ReviewCard";
import img4 from "../Images/istockphoto-1158342659-612x612.jpg"
import AnimatedItem from "../AnimatedItem/AnimatedItem";
import Title from "../Title/Title";
import { Link } from "react-router-dom";


const items = [
    {
        key: "openingBlock",
        element: (
            <div className="p-10 mt-8">
                <div className="pl-16 sm:pl-0 grid grid-cols-1 mx-auto md:grid-cols-2 w-72 gap-6 md:w-[30rem] lg:w-[45rem] 2xl:w-[55rem]">
                    <div className="mb-12 md:mb-0 md:mx-0">
                        <h1 className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight w-64 font-bold mb-6 sm:w-[20rem] md:w-60 lg:w-[22rem]">Get your logo with the click of a button</h1>
                        <p className="text-lg leading-8 w-64 mb-6 sm:w-[20rem] md:w-60 lg:w-[22rem]">Do not waste your time on making a logo, or wasting your money on a designer.</p>
                        <div className="flex justify-center md:justify-start">
                            <Link to="/catalog" className="btn btn-primary bg-purple-600">Get yours now!</Link>
                        </div>
                    </div>
                    <img src={img4} alt="panda"></img>
                </div>
            </div>
        ),
    },
    {
        key: "saveMoney",
        element: (
            <div className="pl-16 sm:pl-0">
                <div className="w-64 mx-auto sm:w-[20rem] md:w-[25rem] lg:w-[50rem]">
                    <h1 className="text-center text-4xl md:text-3xl xl:text-4xl font-bold p-10 ">Let us save you money</h1>
                    <p className="text-center text-base lg:text-lg mb-24">Why spend a fortune and endless hours hiring a designer for your logo?
                        With our catalog of ready-made logos and a simple custom logo request form, you can bring your dream logo to life for <span className="text-green-300 font-bold">FREE</span>.
                        Describe your vision, and we'll make it a reality.
                    </p>
                </div>
            </div>
        ),
    },
    {
        key: "benefitCard",
        element: (
            <div className="grid grid-cols-1 gap-6 w-72 pl-16 sm:pl-0 mx-auto lg:grid-cols-2 xl:grid-cols-3 lg:w-[50rem] xl:w-[60rem]">
                <BenefitCard
                    icon={<IoLogoUsd />}
                    title={"Save Time and Money"}
                    text={"Skip the lengthy design process and high designer fees. Get your logo quickly and at no cost."}
                />
                <BenefitCard
                    icon={<TbFileTypeSvg />}
                    title={"High Resolution"}
                    text={"Our logos are SVG, ensuring clarity and resizing flexibility, making your logo versatile for all your branding needs."}
                />
                <BenefitCard
                    icon={<FaImages />}
                    title={"Endless Options"}
                    text={"Explore a wide range of logo styles and concepts from our catalog."}
                />
                <BenefitCard
                    icon={<FaSearchDollar />}
                    title={"No Hidden Fees"}
                    text={"Unlike other services that charge for every change, we offer a transparent and free logo creation process."}
                />
                <BenefitCard
                    icon={<FaMagic />}
                    title={"Personalized Logo"}
                    text={" Describe your logo idea, and our skilled designers will bring it to life."}
                />
                <BenefitCard
                    icon={<FaBullhorn />}
                    title={"Social Presence"}
                    text={"Capture attention and make your logo stand out in the social spotlight."}
                />
            </div>
        ),
    },
    {
        key: "reviewCard",
        element: (
            <div>
                <div className="pl-16 mx-auto sm:pl-0">
                    <h1 className="text-center text-4xl p-10">What our users are saying</h1>
                </div>


                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24 mx-auto md:w-[34rem] lg:w-[49rem] xl:w-[55rem]">
                    <ReviewCard
                        picture={img4}
                        username={"Sarah"}
                        star={<IoStar />}
                        text={"A lifesaver for startups. It's made logo design accessible and affordable without compromising on quality."}
                    />
                    <ReviewCard
                        picture={img4}
                        username={"David"}
                        star={<IoStar />}
                        text={"A must-have tool for designers and non-designers alike. It's intuitive, and the results are top-notch."}
                    />
                    <ReviewCard
                        picture={img4}
                        username={"Aarav"}
                        star={<IoStar />}
                        text={"Simplifies logo creation like no other app. The options are endless, and the quality is exceptional."}
                    />
                    <ReviewCard
                        picture={img4}
                        username={"Lisa"}
                        star={<IoStar />}
                        text={"Lives up to its name. I'm continually impressed by the quality and versatility of logos I can choose from."}
                    />
                    <ReviewCard
                        picture={img4}
                        username={"Jason"}
                        star={<IoStar />}
                        text={"Transformed my logo design process! It's a game-changer for anyone looking to create stunning logos with ease."}
                    />
                    <ReviewCard
                        picture={img4}
                        username={"Max"}
                        star={<IoStar />}
                        text={"My go-to logo creation tool. It's user-friendly, and the logos are always pixel-perfect. Highly recommended!"}
                    />
                </div>
            </div>
        ),
    },
    {
        key: "lastPart",
        element: (
            <div>
                <div className="pl-16 sm:pl-0">
                    <div className="w-64 text-center mx-auto sm:w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[55rem]">
                        <p>Tailored for web application developers looking to quickly and affordably create
                            custom icons with a high degree of consistency and customization.
                            Although designers have their role, our AI-powered tool can greatly complement your design resources.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center p-10 ml-16 sm:mx-auto">
                    <Link to="/catalog" className="btn btn-primary btn-wide">Get your logo now!</Link>
                </div>
            </div>
        ),
    }
];


const HomePage = () => {
    return (
        <>

            <Title />
            {items.map((item, index) => (
                <AnimatedItem item={item} index={index} key={item.key} items={items} />
            ))}
        </>
    );
};

export default HomePage;