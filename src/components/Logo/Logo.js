import React, { useEffect } from 'react';
import './Logo.css';
import img1 from '../Images/color1.png'
import img2 from '../Images/color4.png'
import img3 from '../Images/color5.png'


const Logo = () => {
    useEffect(() => {
        const logo = document.getElementById("logo");
        const images = logo.querySelectorAll("img");

        const shift = (image, index, rangeX, rangeY) => {
            const translationIntensity = 4;
            const maxTranslation = translationIntensity * (index + 1);
            const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY
                }%`;

            image.animate(
                { translate: currentTranslation },
                { duration: 750, fill: "forwards", easing: "ease" }
            );
        };

        const shiftAll = (images, rangeX, rangeY) =>
            images.forEach((image, index) => shift(image, index, rangeX, rangeY));

        const shiftLogo = (e) => {
            const rect = logo.getBoundingClientRect();
            const radius = 1000;

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const rangeX = (e.clientX - centerX) / radius;
            const rangeY = (e.clientY - centerY) / radius;

            shiftAll(images, rangeX, rangeY);
        };

        const resetLogo = () => {
            shiftAll(images, 0.4, -0.7);
        };

        window.addEventListener("mousemove", shiftLogo);
        document.body.addEventListener("mouseleave", () => {
            resetLogo();
        });

        resetLogo();

        // Clean up the event listeners when the component unmounts
        return () => {
            window.removeEventListener("mousemove", shiftLogo);
            document.body.removeEventListener("mouseleave", () => {
                resetLogo();
            });
        };
    }, []); // Empty dependency array to run the effect once

    return (
        <>
            <div id="logo" className='w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 ml-16 sm:ml-0 mx-auto pb-10'>
                <img
                    src={img3}
                    draggable="false"
                    alt="Logo 1"
                />
                <img
                    src={img2}
                    draggable="false"
                    alt="Logo 2"
                />
                <img
                    src={img1}
                    draggable="false"
                    alt="Logo 3"
                />
            </div>
        </>
    );
}

export default Logo;
