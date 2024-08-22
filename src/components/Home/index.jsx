import React, { useEffect, useRef } from "react"
import "./style.scss";
import {BsMouse} from "react-icons/bs";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home(){

    const h1Ref = useRef(null);
    const logoRef = useRef(null);
    const scrollRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(()=>{
        const gsapAnimation = (Obj) => {
            gsap.fromTo(Obj.element.current, 
                {
                    scale: Obj.initScale,
                    y: `${Obj.initY}`,
                    opacity: Obj.initOpacity,
                    rotate: `${Obj.rotate}deg`,
                    yPercent: Obj.yPercent,
                }, 
                {scale: Obj.endScale, y: `${Obj.endY}`, rotate: "0deg", opacity: Obj.endOpacity, duration: .6, scrollTrigger:{
                    trigger: Obj.trigger.current,
                    scrub: 2,
                    markers: false,
                }})
        }

        const AnimateObject = [
            {
                element: h1Ref,
                trigger: triggerRef,
                rotate: 0,
                yPercent: 0,
                initScale: 1,
                endScale: .5,
                initY: "65vh",
                endY: "0vh",
                initOpacity: .8,
                endOpacity: 0,
            },
            {
                element: logoRef,
                trigger: triggerRef,
                rotate: 0,
                yPercent: -50,
                initScale: .5,
                endScale: .05,
                initY: "50vh",
                endY: "1.5rem",
                initOpacity: 1,
                endOpacity: 0.8,
            },
            {
                element: scrollRef,
                trigger: scrollRef,
                rotate: 0,
                yPercent: 0,
                initScale: 1,
                endScale: 1,
                initY: "10rem",
                endY: "0rem",
                initOpacity: 0.5,
                endOpacity: 1,
            }
        ]
     
        AnimateObject.map((item)=>{
            gsapAnimation(item);
            return item;
        })
    },[])

    return(
        <section className="home" id="home">
            <div className="main-title">
                <h1 ref={h1Ref}>Bienvenue sur mon <span>Portfolio</span></h1>
                <img src="./img/logo.png" alt="thinking-raptor" ref={logoRef}/>
            </div>
            <div className="banner" ref={triggerRef}>
                <img src="./img/banner.webp" alt="bannière Jurassic Park sepia" width="1920" height="1080"/>
                <div className="text-at-bottom" ref={scrollRef}>
                    <p><BsMouse className="icon"/> SCROLL</p>
                    <span>POUR EN SAVOIR PLUS SUR MOI</span>
                </div>
            </div>
        </section>
    );
}