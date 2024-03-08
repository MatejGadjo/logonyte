import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { PiCurrencyDollarBold } from "react-icons/pi";

const ProgressBar = () => {
    const [value, setValue] = useState(0);
    const maxValue = 100; // Define the maximum value for the visual representation

    const progressAnim = useSpring({
        from: { progress: 0 },
        to: { progress: value / maxValue * 100 }, // Calculate visual progress based on actual value
        config: { duration: 5000, easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t) },
    });

    React.useEffect(() => {
        setValue(30);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-5/6 mx-auto relative">
            <div className="flex flex-row justify-between w-full">
                <div className="flex pb-2">
                    <p className="text-2xl/none">0</p>
                    <PiCurrencyDollarBold className="text-[24px]" />
                </div>
                <div className="flex pb-2">
                    <p className="text-2xl/none">100</p>
                    <PiCurrencyDollarBold className="text-[24px]" />
                </div>
            </div>
            <div className="progress progress-primary bg-slate-300">
                <animated.div
                    className="rounded bg-purple-600 h-full"
                    style={{
                        width: progressAnim.progress.interpolate((val) => `${val}%`),
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
