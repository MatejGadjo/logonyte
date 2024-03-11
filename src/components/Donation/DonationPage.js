import React, { useEffect, useRef, useState } from "react";
import './DonationPage.css';
import { SiBuymeacoffee } from "react-icons/si";
import { useSpring, animated } from "react-spring";
import { useResponsive } from "../../custom hooks/useResponsive";
import ProgressBar from "../ProgressBar/ProgressBar";

const DonationPage = () => {

    const { isMobile, isTablet } = useResponsive();

    const [isChecked, setIsChecked] = useState(false);

    const [checkboxOpacity, setCheckboxOpacity] = useState(1);

    const handleCheckboxClick = () => {
        setCheckboxOpacity(0);
        setTimeout(() => {
            setCheckboxOpacity(1);
            setIsChecked(!isChecked);
        }, 500);
    };

    const checkboxAnimation = useSpring({
        opacity: checkboxOpacity,
    });

    const textAnimationFirst = useSpring({
        opacity: isChecked ? 1 : 0,
        delay: 200,
        config: { duration: 400 },
    });

    const textAnimationSecond = useSpring({
        opacity: isChecked ? 1 : 0,
        delay: 300,
        config: { duration: 400 },
    });

    const cardAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 100,
        config: { duration: 400 },
    });

    const subtitleRef = useRef(null);

    useEffect(() => {
        const subtitle = subtitleRef.current;

        if (subtitle && !subtitle.hasChildNodes()) {
            const createWord = (text, index) => {
                const word = document.createElement("span");
                word.innerHTML = `${text} `;
                word.classList.add("card-subtitle-word");
                word.style.transitionDelay = `${index * 40}ms`;
                return word;
            };

            const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

            const createSubtitle = text => text.split(" ").forEach(addWord);

            createSubtitle("If you've been loving our logos or enjoying our exceptional service, consider showing your support through a donation. Your contribution helps us continue delivering quality and making a difference.");
        }
    }, []);


    

    return (
        <div>
            {isMobile || isTablet ? (
                <div className={`ml-16 sm:ml-0 ${isChecked ? "h-screen" : ""}`}>
                    <div className={`p-4 text-center ${isChecked ? "" : "hidden"}`}>
                        <animated.h1 style={textAnimationFirst} className="text-3xl font-bold mb-4 mt-10 sm:text-6xl">Support Our Vision</animated.h1>
                        <animated.p
                            style={textAnimationSecond}
                            className="text-lg mb-4 sm:text-2xl">
                            If you've been loving our logos or enjoying our exceptional service, consider showing your support through a donation. Your contribution helps us continue delivering quality and making a difference.
                        </animated.p>
                        <a href="https://www.buymeacoffee.com/logonyte" target="_blank" rel="noopener noreferrer" className="btn sm:w-64 sm:text-xl sm:h-16">
                            Donate Now
                        </a>
                    </div>

                    <div className={`flex justify-center items-center ${isChecked ? "p-24" : "h-[100vh]"} `}>
                        <animated.input
                            style={checkboxAnimation}
                            type="checkbox"
                            className="toggle toggle-lg"
                            checked={isChecked}
                            // onChange={() => setIsChecked(!isChecked)}
                            onChange={handleCheckboxClick}
                        />
                    </div>
                    {isChecked && <animated.div style={cardAnimation}>
                        <ProgressBar />
                    </animated.div>}


                </div>
            ) : (
                <animated.div style={cardAnimation}>
                    <div
                        className="body_fake"
                    >
                        <a href="https://www.buymeacoffee.com/logonyte" target="_blank" rel="noopener noreferrer"
                            className="card_custom ml-16 sm:ml-0"
                        >
                            <div className="card-content">
                                <h3 className="card-title_custom">Click to Reveal the Magic</h3>
                                <h4 ref={subtitleRef} className="card-subtitle"></h4>
                            </div>
                            <i className="card-icon"><SiBuymeacoffee /></i>
                        </a>
                    </div>
                    <ProgressBar />
                </animated.div>

            )}
        </div>
    );
};

export default DonationPage;
