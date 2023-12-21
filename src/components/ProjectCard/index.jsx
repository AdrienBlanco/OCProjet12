import React, { useState } from "react"
import { BsGithub } from "react-icons/bs"
import { easeInOut, motion as m } from "framer-motion"
import "./project.scss"

export default function ProjectCard({ img, title, title_des, description, alt, github, skills }) {

    const [isClick, setIsClick] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="project" >
            <div className="background"
                onClick={() => setIsClick(true)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img src={img} alt={alt} />
                {isHover &&
                    <>
                        <m.div className="click-me-mate"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: .3, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: .6, ease: easeInOut }}
                        ></m.div>
                        <m.p className="click-me"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .2, duration: .6, ease: easeInOut }}
                        >Click<br />me</m.p>
                    </>
                }
            </div>
            <p className="title">{title.toUpperCase()}</p>
            {isClick &&
                <div className="detail">
                    <div className="mate" onClick={() => setIsClick(false)}></div>
                    <div className="project-card">
                        <button onClick={() => setIsClick(false)}>close</button>
                        <p className="title-detail">
                            LE PROJET EN DETAILS
                        </p>
                        <m.img src={img}
                            alt={title}
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ duration: .6, ease: easeInOut }}
                        />
                        <m.h2
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ delay: .2, duration: .6, ease: easeInOut }}
                        >{title_des}</m.h2>
                        <m.div className="content"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 200 }}
                            transition={{ delay: .4, duration: .6, ease: easeInOut }}
                        >
                            {description}

                            <br/><span>{skills}</span>

                            {github && <a className="github-link" href={github}><p><BsGithub className="github-icon" /> Le code du projet </p></a>}
                        </m.div>
                    </div>
                </div>
            }
        </div>
    );
}
