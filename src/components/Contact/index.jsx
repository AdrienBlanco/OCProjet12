import React, { useEffect, useRef, useState } from "react"
import "./contact.scss"
import emailjs from '@emailjs/browser';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const textH1Ref = useRef(null);
    const RefArray = [textH1Ref];

    const gsapAnimation = (ref) => {
        gsap.fromTo(ref.current,
            {
                y: "10rem",
            },
            {
                y: "0rem", duration: 1, scrollTrigger: {
                    trigger: ref.current,
                    toggleActions: 'restart none restart none',
                    start: `-600px center`,
                    end: `top center`,
                    scrub: 2,
                    markers: false,
                }
            })
    }

    useEffect(() => {
        RefArray.map(item => gsapAnimation(item));
    }, [])

    return (
        <footer className="contact">
            <h2 ref={textH1Ref}>CONTACTEZ-MOI</h2>
            <br/>
            <a href="mailto:adrienblanco89@gmail.com">adrienblanco89@gmail.com</a>
            <a href="tel:+33664148826">+33 (0)6 64 14 88 26</a>
        </footer>
    );
};

export default Contact;