import React, { useEffect, useRef } from "react";
import "./style.scss";
import { BsLinkedin } from "react-icons/bs";
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
            <div className="contact" id="contact" ref={textH1Ref}>
                <h2 >Entrons en contact</h2>
                <p>Je suis super sympa 😁</p>
                <br />
                <div className="link__wrapper">
                    <a href="mailto:adrienblanco89@gmail.com" target="_blank" rel="noreferrer">adrienblanco89@gmail.com</a>
                    <a href="tel:+33664148826" target="_blank" rel="noreferrer">+33 (0)6 64 14 88 26</a>
                    <a className="linkedin" href="https://www.linkedin.com/in/adrien-blanco/" target="_blank" rel="noreferrer">Linked<BsLinkedin className="linkedin-i" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Contact;