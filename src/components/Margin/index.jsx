import React, { useRef, useEffect } from "react";
import "./style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsGithub } from "react-icons/bs";
gsap.registerPlugin(ScrollTrigger);

function Margin() {

    const imgRef = useRef(null);
    const paraRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {

        const AnimateObject = [imgRef, paraRef, infoRef];

        const gsapAnimation = (ref) => {
            gsap.fromTo(ref.current,
                {
                    y: "10rem",
                    opacity: 0.5,
                },
                {
                    y: "0rem", opacity: 1, duration: 1, scrollTrigger: {
                        trigger: ref.current,
                        toggleActions: 'restart none restart none',
                        start: `-600px center`,
                        end: `top center`,
                        scrub: 2,
                        markers: false,
                    }
                })
        }

        AnimateObject.map(item => {
            gsapAnimation(item);
            return item;
        })
    }, [imgRef, paraRef, infoRef])

    return (
        <section className="margin" id="margin">
            <div className="content">
                <div className="img__container" ref={imgRef}>
                    <img className="img" src="./img/logo_margin.webp" alt="logo Margin Web Solution"></img>
                </div>
                <div className="paragraph" ref={paraRef}>
                    <h2>Margin Web Solutions</h2>
                    En <span>2024</span> je démarre mon activité en freelance avec <span>Marc</span>, un ami développeur. 
                    <br />
                    <br />
                    Pour plus d'efficacité, et aussi parce qu'<span>on aime le travail en équipe</span>, 
                    nous décidons de lancer <span>Margin</span>, notre micro-agence de création de <span>sites vitrines</span> à destination <span>des artisans et des PME</span> autour de chez nous.
                    <br />
                    <br />
                    Ne soyez pas timide et <span>venez jeter un oeil</span> : <a className="link-margin" href="https://margin-web.com" target="_blank" rel="noopener noreferrer">margin-web.com</a>
                    <br />
                </div>
                <div className="info" ref={infoRef}>
                    <a href="https://github.com/marginWebSolutions" target="_blank" rel="noopener noreferrer"><h3 className="name"><BsGithub className="github-i" /> marginWebSolutions</h3>
                        <span>et notre Github est ici !</span></a>
                </div>
            </div>
        </section>
    );
};

export default Margin;