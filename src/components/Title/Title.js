import React from "react";
import "./Title.css";
import { useSpring, animated } from "react-spring";
import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import Logo from "../Logo/Logo";

const Title = () => {
    const titleAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500,
        config: { duration: 1000 },
    });

    const logoAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 100,
        config: { duration: 1000 },
    });

    const titleContent = (
        <div>
            <animated.h1
                style={titleAnimation}
                className="text-4xl sm:text-2xl tracking-tight lg:tracking-wide font-bold xl:text-5xl title_text w-72 ml-14 sm:mx-auto sm:w-[25rem] md:w-[35rem] lg:w-[50rem] xl:w-[55rem] mb-24"
            >
                Beyond AI's imagination.
                <br />
                <span className="magic font-extrabold">LogoNyte</span>
                , the logo industry kryptonite
            </animated.h1>
        </div>
    );

    const logoContent = (
        <animated.div style={logoAnimation}>
            <Logo />
        </animated.div>
    )

    return (
        <div
            className="flex justify-center flex-col items-center h-screen text-center">
            <AnimatedTitle item={{ element: titleContent }} />
            <AnimatedTitle item={{ element: logoContent }} />
        </div>
    );
}

export default Title;
