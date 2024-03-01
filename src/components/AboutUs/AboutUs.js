import React from "react";
import FAQ from "./FAQ";
import Contact from "./Contact";
import InfoUs from "./InfoUs";
import '../Title/Title.css';
import FAQFull from "./FAQFull";
import InfoUsFull from "./InfoUsFull";
import '../CardList/CardList.css';

const AboutUs = () => {

    const handleScrollToFAQFull = () => {
        const scrollTarget = document.getElementById("faqFull");
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToInfoUsFull = () => {
        const scrollTarget = document.getElementById("infoUsFull");
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToFooter = () => {
        const scrollTarget = document.getElementById("footerScroll");
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div>
            <div className="cardlist_pos pl-16 sm:pl-0 mx-auto xl:h-screen">
                <FAQ onScrollToFAQFull={handleScrollToFAQFull} />
                <Contact onScrollToFooter={handleScrollToFooter} />
                <InfoUs onScrollToInfoUsFull={handleScrollToInfoUsFull} />
            </div>
            <div>
                <FAQFull />
                <InfoUsFull />
            </div>
        </div>
    )
}

export default AboutUs;