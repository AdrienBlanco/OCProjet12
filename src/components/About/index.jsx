import React, { useRef, useEffect } from "react";
import "./style.scss";
import adrien from "../../img/adrien.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsGithub } from "react-icons/bs";
gsap.registerPlugin(ScrollTrigger);

function About() {

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
        <section className="about">
            <div className="content">
                <img src={adrien} alt="Adrien Blanco" ref={imgRef}></img>
                <p className="paragraph" ref={paraRef}>
                    Hello world.<br />
                    Moi c'est Adrien, 34 ans, passionné par l'informatique, la culture Internet et les <span>dinosaures</span> depuis l'enfance.
                    <br />
                    <br />
                    C'est fin <span>2022</span> que je saute le pas pour apprendre les bases du <span>développement Web Frontend</span>.
                    Je rentre chez <span>OpenClassRooms</span> en tant qu'élève Intégrateur Web en <span>février 2023</span>.
                    Durant mon parcours j'ai touché à différents aspects du métier et j'ai pu me spécialiser en <span>React</span>.
                    <br />
                    <br />
                    N'hésitez pas à jeter un oeil à mon travail en continuant plus bas.
                    <br />
                    <br />
                </p>
                <div className="info" ref={infoRef}>
                    <a href="https://github.com/AdrienBlanco"><h2 className="name"><BsGithub className="github-i" /> AdrienBlanco</h2>
                        <h3>Suivez-moi sur Github !</h3></a>
                </div>
            </div>
        </section>
    );
};

export default About;