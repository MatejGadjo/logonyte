import React, { useEffect, useRef } from "react";
import './SpecialCard.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
import { useResponsive } from "../../custom hooks/useResponsive";

const InfoUs = ({ onScrollToInfoUsFull }) => {

    const cardAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 200,
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

            createSubtitle("We're logo knights! Crafting brilliance into every design, one masterpiece at a time. Click to discover the secrets behind our noble creations.");
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        onScrollToInfoUsFull();
    };

    return (

        <animated.div
            style={cardAnimation}
            className="body_fake_2"
        >
            <a
                href="#"
                onClick={handleClick}
                className="card_custom_2"
            >
                <div className="card-content_2">
                    <h3 className="card-title_custom_2">About Us</h3>
                    <h4 ref={subtitleRef} className="card-subtitle_2"></h4>
                </div>
                <i className="card-icon_2"><IoInformationCircleOutline /></i>
            </a>
        </animated.div>

    );
};

export default InfoUs;
