import React, {useState } from "react"
import "./style.scss"
import Link from "react-scroll/modules/components/Link";
import {FaBars, FaTimes} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Navbar(){
    const [isShowNav, setIsShowNav] = useState(false);
    return(
        <header className="navbar" style={{
            zIndex: `${isShowNav ? "10000" : "100"} `
        }}>
            <h1 className="intro">Adrien Blanco</h1>
            <nav className={`nav-menu ${isShowNav ? "responsive_nav" : ""}`}>
                <div className="nav-link">
                    <Link className="nav-item" to="home" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={0} duration={600}>ACCUEIL</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="about" sr-only="" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={0} duration={600}>A PROPOS</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="project-content" spy={true} onClick={()=>setIsShowNav(false)} smooth={true} offset={-50} duration={600}>PROJETS</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="contact" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={-50} duration={600}>CONTACT</Link>
                </div>
                <div className="nav-link">
                    <a className="nav-item-linkedin" href="https://www.linkedin.com/in/adrien-blanco/" target="_blank" rel="noreferrer" onClick={()=>setIsShowNav(false)} ><BsLinkedin className="linkedin-i" /></a>
                </div>
                <button onClick={()=>setIsShowNav(false)} className="nav-btn nav-close-btn" aria-label="Fermer la fenêtre"><FaTimes/></button>
            </nav>
            <button onClick={()=>setIsShowNav(true)} className="nav-btn" aria-label="volet de navigation"><FaBars className="bars"/></button>
        </header>
    );
}