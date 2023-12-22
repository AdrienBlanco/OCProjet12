import React, {useState } from "react";
import "./style.scss";
import Link from "react-scroll/modules/components/Link";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar(){
    const [isShowNav, setIsShowNav] = useState(false);
    return(
        <header className="navbar" style={{
            zIndex: `${isShowNav ? "10000" : "100"} `
        }}>
            <p className="intro">Adrien Blanco</p>
            <nav className={`nav-menu ${isShowNav ? "responsive_nav" : ""}`}>
                <div className="nav-link">
                    <Link className="nav-item" to="home" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={0} duration={600}>ACCUEIL</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="about" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={0} duration={600}>A PROPOS</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="project-content" spy={true} onClick={()=>setIsShowNav(false)} smooth={true} offset={-50} duration={600}>PROJETS</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="contact" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={-50} duration={600}>CONTACT</Link>
                </div>
                <button onClick={()=>setIsShowNav(false)} className="nav-btn nav-close-btn"><FaTimes/></button>
            </nav>
            <button onClick={()=>setIsShowNav(true)} className="nav-btn"><FaBars/></button>
        </header>
    );
}