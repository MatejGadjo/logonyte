import React from "react";
import { useInView, useTrail, animated } from "react-spring";

const AnimatedTitle = ({ item }) => { // Change the prop to accept a single item
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
      }}
    >
      {item.element}
    </animated.div>
  );
};

export default AnimatedTitle;
