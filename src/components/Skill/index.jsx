import React, { useEffect, useRef } from "react";
import "./style.scss";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiSass, DiVisualstudio, DiGit } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        icon: <DiHtml5 />,
    },
    {
        icon: <DiCss3 />,
    },
    {
        icon: <DiJavascript />,
    },
    {
        icon: <DiReact />,
    },
    {
        icon: <DiSass />,
    },
    {
        icon: <DiVisualstudio />,
    },
    {
        icon: <DiGit />,
    },
]


export default function Skill() {

    const h1Ref = useRef(null);
    const skillIntroRef = useRef(null);
    const skillBoxRef = useRef(null);

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

        const refEle = [h1Ref, skillIntroRef, skillBoxRef];

        refEle.map(item => {
            gsapAnimation(item);
            return item;
        })
    }, [h1Ref, skillIntroRef, skillBoxRef]);

    return (
        <section className="skill-page">
            <div className="skill-content">
                <div className="skill-intro" ref={skillIntroRef}>
                    <p><span>"</span> Voici quelques-unes de mes compétences actuelles. <br />Laissez-moi vous montrer...</p>
                    <div className="code-box">
                        <pre>
                            1   const myTechnicalSkills = [ HTML, CSS, Javascript, React, Sass ];<br />
                            2   const myTools = [ VisualStudioCode, Git ];<br />
                            3   console.log(mySkills: [ ...myTechnicalSkills, ...myTools ]);
                        </pre>
                        <div className="typing"><span className="pointer">|</span></div>
                    </div>
                </div>

                <div className="skill-box" ref={skillBoxRef}>
                    { skills.map((item, index) => (
                            <div className="skill" key={index}>
                                <div className="icon icon-sizing">{item.icon}</div>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    );
}