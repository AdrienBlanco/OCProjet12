import React, { useEffect, useRef } from "react";
import "./style.scss";
import ProjectCard from "../ProjectCard";
import projectsData from "../../data/projectsData.json";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects(){

    const imgRef = useRef(null);
    const textH1Ref = useRef(null);
    const infoRef = useRef(null);
    const projRef = useRef(null);

    const gsapAnimation = (ref, deg) => {
        gsap.fromTo(ref.current, 
            {
                y: "10rem",
                opacity: 0.5,
                rotate: `${deg}deg`
            }, 
            {y: "0rem", opacity: 1, rotate: "0deg", duration: 1, scrollTrigger:{
                trigger: ref.current,
                toggleActions: 'restart none restart none',
                start: `-600px center`,
                end: `top center`,
                scrub: 2,
                markers: false,
            }})
    }

    useEffect(()=>{
        gsapAnimation(imgRef, -90);
        gsapAnimation(textH1Ref, 0);
        gsapAnimation(infoRef, 0);
    },[])

    return(
        <section className="project-content" id="project">
            <div className="intro">
                <img src="./img/logo2.png" alt="symbole circulaire" className="logo" ref={imgRef} />
                <div className="text">
                    <h2 ref={textH1Ref}>PROJETS DE FORMATION</h2>
                    <p ref={infoRef}>
                        Voici une <span>sélection des projets</span> sur lesquels j'ai pu travailler en <span>2023</span>,<br/>
                        dans le cadre de ma <span>formation chez OpenClassRooms</span>.
                    </p>
                </div>
            </div>
            <div className="projects" ref={projRef}>
                {projectsData.map((item, index)=>(
                    <ProjectCard 
                        key={index} 
                        img={item.img}
                        alt={item.title_des} 
                        title={item.title}
                        title_des = {item.title_des}
                        description={item.description}
                        github = {item.github}
                        className="project"
                        skills={item.skills}
                        // page={item.page}
                    />
                ))}
            </div>
        </section>
    );
}