import React from "react";
import { Disclosure } from '@headlessui/react'
import { IoChevronForwardCircleOutline, IoChevronDownCircleOutline } from "react-icons/io5";
import "./FAQFull.css";
import { useResponsive } from "../../custom hooks/useResponsive";
import { useSpring, animated } from "react-spring";

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]



const FAQFull = () => {

    const cardAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 100,
        config: { duration: 400 },
      });

    const isMobile = useResponsive()

    return (
        <div>
            {isMobile ? (
                <animated.div style={cardAnimation} id="faqFull" className="pl-16 sm:pl-0">
                    <div className="mx-auto px-6 py-10">
                        <div className="mx-auto divide-y divide-white-900/10">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white-900">Frequently asked questions</h2>
                            <dl className="mt-10 space-y-6 divide-y divide-white-900/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white-900">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <IoChevronDownCircleOutline className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <IoChevronForwardCircleOutline className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7 text-white-600">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </animated.div>
            ) : (

                <animated.div style={cardAnimation} id="faqFull" className="pt-6 pl-16 sm:pl-0">
                    <div className="border-4 rounded-xl mt-24 w-64 background-reversed mx-auto sm:w-[25rem] md:w-[32rem] lg:w-[39rem] xl:w-[60rem] 2xl:w-[70rem]">
                        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                            <div className="mx-auto max-w-4xl divide-y divide-white-900/10">
                                <h2 className="text-2xl font-bold leading-10 tracking-tight text-white-900">Frequently asked questions</h2>
                                <dl className="mt-10 space-y-6 divide-y divide-white-900/10">
                                    {faqs.map((faq) => (
                                        <Disclosure as="div" key={faq.question} className="pt-6">
                                            {({ open }) => (
                                                <>
                                                    <dt>
                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white-900">
                                                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                            <span className="ml-6 flex h-7 items-center">
                                                                {open ? (
                                                                    <IoChevronDownCircleOutline className="h-6 w-6" aria-hidden="true" />
                                                                ) : (
                                                                    <IoChevronForwardCircleOutline className="h-6 w-6" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                        <p className="text-base leading-7 text-white-600">{faq.answer}</p>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </animated.div>
            )}
        </div>
    )
}

export default FAQFull;
