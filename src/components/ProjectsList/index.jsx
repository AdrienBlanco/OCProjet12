import React, { useEffect, useRef } from "react";
import "./style.scss";
import ProjectCard from "../ProjectCard";
import ArgentBank from "../../img/ArgentBank.webp";
import Booki from "../../img/Booki.webp";
import OhMyFood from "../../img/OhMyFood.webp";
import Kasa from "../../img/Kasa.webp";
import Events from "../../img/events.webp";
import logo from "../../img/logo2.png";
// import projectsData from "../../../public/data/projectsData.json";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectArr = [
    {
        img: ArgentBank,
        title: "Argent Bank",
        title_des: "Implémenter le front-end d'une application bancaire avec React",
        description: "Développement du front-end d'une nouvelle banque en ligne avec React & Redux. Gestion des connexions utilisateurs et affichages de leurs comptes et transactions ainsi que la possiblité de modifier leur pseudo. Le tout via des appels API. Création de nouvelles routes API pour la gestion des transactions.",
        skills: "Javascript | React | Sass | Redux | Swagger",                 
        github: "https://github.com/AdrienBlanco/OCProjet11"
    },
    {
        img: Booki,
        title: "Booki",
        title_des: "Créer la page d'accueil d'une agence de voyage avec HTML & CSS",
        description: "Création de la page d'accueil d'une agence de voyage. L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Site entièrement réalisé en Html et Css.",
        skills: "HTML | CSS",                      
        github: "https://github.com/AdrienBlanco/OCProjet3"
    },    
    {
        img: OhMyFood,
        title: "Ohmyfood",
        title_des: "Améliorer l'interface d'un site mobile avec des animations CSS",
        description: "Développement d'un site en mobile first qui répertorie les menus de restaurants gastronomiques. Style et animations réalisés avec Sass.",
        skills: "HTML | Sass",                 
        github: "https://github.com/AdrienBlanco/OCProjet4"
    },    
    {
        img: Kasa,
        title: "Kasa",
        title_des: "Créer une application web de location immobilière avec React",
        description: "Refonte d'un site de location d'appartements. Intégration de React avec des composants et les différentes routes. Création d'animations CSS de menus déroulants. Mise en place de requêtes vers un fichier Json pour alimenter les différents contenus sur le site. Intégration du site de manière responsive.",
        skills: "Javascript | React | Sass",                 
        github: "https://github.com/AdrienBlanco/OCProjet8"
    },    
    {
        img: Events,
        title: "724events",
        title_des: "Débugger le site d'une agence d'événementiel",
        description: "Débogage d'un site implémenté avec React, en utilisant des tests unitaires et d'intégrations réalisés avec Jest. Ecriture d'un cahier de recette des différentes fonctionnalités du site.",
        skills: "Javascript | React | Sass | Jest",                 
        github: "https://github.com/AdrienBlanco/OCProjet10"
    },
]

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
        <section className="project-content">
            <div className="intro">
                <img src={logo} alt="symbole circulaire" className="logo" ref={imgRef} />
                <div className="text">
                    <h2 ref={textH1Ref}>PROJETS</h2>
                    <p ref={infoRef}>
                        Hey,<br/>
                        Voici une <span>sélection des projets</span> sur lesquels j'ai pu travailler en <span>2023</span>.<br/>
                        Ces différents projets ont été réalisés dans le cadre de ma <span>formation chez OpenClassRooms</span>.
                    </p>
                </div>
            </div>
            <div className="projects" ref={projRef}>
                {projectArr.map((item, index)=>(
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
                    />
                ))}
            </div>
        </section>
    );
}