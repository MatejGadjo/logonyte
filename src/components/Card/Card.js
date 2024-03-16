import React, { useState } from "react";
import './Card.css';
import { useInView, useSpring, animated } from "react-spring";
import { useResponsive } from "../../custom hooks/useResponsive";

const Card = ({ image, description, link }) => {

    const { isMobile, isTablet } = useResponsive();

    const cardAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 50,
        config: { duration: 400 },
    });

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const cardSpring = useSpring({
        opacity: inView ? 1 : 0,
        from: { opacity: 0 },
    });

    const [isHover, setIsHover] = useState(false);

    return (
        <animated.div style={cardAnimation}>
            {isMobile || isTablet ? (
                <animated.div
                    ref={ref}
                    style={cardSpring}
                >
                    <div className="card w-64 bg-base-100 shadow-xl">
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">{description}</p>
                            <div className="card-actions justify-end">
                                <a href={link} className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </animated.div>
            ) : (
                <animated.div
                    ref={ref}
                    className="card_pos"
                    style={cardSpring}
                >
                    <div className={isHover ? "card w-64 h-80 bg-base-100 opacity-20 transition-all duration-500 ease-in-out" : "card w-64 h-80 bg-base-100 shadow-xl transition-all duration-500 ease-in-out"}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <figure>
                            <img src={image} alt="logo" className="w-64 h-64 bg-white" />
                        </figure>


                        <div className="bg-purple-600 rounded-b-[1rem] p-2 text-white">
                            <p className="text-center">{description}</p>
                        </div>



                    </div>

                    <a href={link} className={isHover ? "opacity-80 custom_button transition-all duration-300 ease-in" : "opacity-0 custom_button transition-all duration-300 ease-out"}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Get Now</a>

                </animated.div>
            )}
        </animated.div>
    )
}

export default Card;
