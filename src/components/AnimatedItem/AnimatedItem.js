import React from "react";
import { useInView, useTrail, animated } from "react-spring";

const AnimatedItem = ({ item, index, items }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const trail = useTrail(1, {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(20px)",
        from: { opacity: 0, transform: "translateY(20px)" },
    });

    return (
        <animated.div
            key={item.key}
            ref={ref}
            style={{
                ...trail[0],
                marginBottom: index === items.length - 1 ? "" : "5rem",
            }}
        >
            {item.element}
        </animated.div>
    );
};

export default AnimatedItem;
