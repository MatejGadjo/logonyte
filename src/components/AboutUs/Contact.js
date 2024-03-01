import React, { useEffect, useRef } from "react";
import './SpecialCard.css';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
import { useResponsive } from "../../custom hooks/useResponsive";

const Contact = ({ onScrollToFooter }) => {

    const isMobile = useResponsive();

    const cardAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 150,
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

            createSubtitle("Our team is eagerly standing by, ready to provide exceptional support and answers to all your inquiries. Drop us a line, and we'll respond swiftly.");
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        onScrollToFooter();
    };

    return (
        <div>
            {isMobile ? (
                <div>
                    <p>Lagano</p>
                </div>
            ) : (
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
                            <h3 className="card-title_custom_2">Contact</h3>
                            <h4 ref={subtitleRef} className="card-subtitle_2"></h4>
                        </div>
                        <i className="card-icon_2"><IoPaperPlaneOutline /></i>
                    </a>
                </animated.div>
            )}

        </div>
    );
};

export default Contact;
