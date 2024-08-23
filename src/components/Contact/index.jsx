import React, { useEffect, useRef } from "react";
import "./style.scss";
import { BsLinkedin } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const textH1Ref = useRef(null);
    const paraRef = useRef(null); 

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
        const RefArray = [textH1Ref, paraRef];

        RefArray.map(item => gsapAnimation(item));
    }, [textH1Ref, paraRef]);

    return (
        <footer>
            <div className="contact" id="contact">
                <div ref={textH1Ref}>
                <h2 >Contactez-moi !</h2>
                (Je suis super sympa 😁)
                </div>
                <div className="link__wrapper" ref={paraRef}>
                    <a href="mailto:adrienblanco89@gmail.com" target="_blank" rel="noreferrer">adrienblanco89@gmail.com</a>
                    <a href="tel:+33664148826" target="_blank" rel="noreferrer">+33 (0)6 64 14 88 26</a>
                    <a className="linkedin" href="https://www.linkedin.com/in/adrien-blanco/" target="_blank" rel="noreferrer">Linked<BsLinkedin className="linkedin-i" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Contact;