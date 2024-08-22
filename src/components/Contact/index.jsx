import React, { useEffect, useRef } from "react";
import "./style.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const textH1Ref = useRef(null);

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
        const RefArray = [textH1Ref];

        RefArray.map(item => gsapAnimation(item));
    }, [textH1Ref]);

    return (
        <footer>
            <div className="contact" id="contact">
                <h2 ref={textH1Ref}>CONTACTEZ-MOI</h2>
                <br />
                <br />
                <a href="mailto:adrienblanco89@gmail.com">adrienblanco89@gmail.com</a>
                <a href="tel:+33664148826">+33 (0)6 64 14 88 26</a>
            </div>
        </footer>
    );
};

export default Contact;