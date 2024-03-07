import React from "react"
import { NavLink } from "react-router-dom"

import circle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import tabletCircles from "../assets/web-design/desktop/bg-pattern-intro-web.svg"
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../assets/app-design/desktop/image-faceit.jpg"
import todo from "../assets/app-design/desktop/image-todo.jpg"
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg"
import iconRightArrow from "../assets/shared/desktop/icon-right-arrow.svg"

export default function AppDesign(){
    return(
        <div className="design-page">
            <div className="design-page-intro">
                <img 
                    src={circle}
                    alt="background two-ovals" 
                    className="design-page-bg-image"
                />

                <img
                    src={tabletCircles}
                    alt="background five-ovals" 
                    className="design-page-bg-image-tablet"
                />

                <h1>App Design</h1>

                <p>
                    Our mobile designs bring intuitive digital solutions 
                    to your customers right at their fingertips.
                </p>
            </div>

            <div className="design-page-images">
                <img 
                    src={airfilter}
                    alt="airfilter website image"
                    className="design-page-image"
                />

                <div className="design-page-images-info">
                    <p>AIRFILTER</p>

                    <p>
                        Solving the problem of poor indoor air quality 
                        by filtering the air
                    </p>
                </div>
            </div>

            <div className="design-page-images">
                <img 
                    src={eyecam}
                    alt="eyecam website image"
                    className="design-page-image"
                />

                <div className="design-page-images-info">
                    <p>EYECAM</p>

                    <p>
                        Product that lets you edit your favorite photos 
                        and videos at any time
                    </p>
                </div>
            </div>

            <div className="design-page-images">
                <img 
                    src={faceit}
                    alt="faceit website image"
                    className="design-page-image"
                />

                <div className="design-page-images-info">
                    <p>FACEIT</p>

                    <p>
                        Get to meet your favorite internet 
                        superstar with the faceit app
                    </p>
                </div>
            </div>

            <div className="design-page-images">
                <img 
                    src={todo}
                    alt="todo website image"
                    className="design-page-image"
                />

                <div className="design-page-images-info">
                    <p>TODO</p>

                    <p>
                        A todo app that features cloud sync 
                        with light and dark mode
                    </p>
                </div>
            </div>

            <div className="design-page-images">
                <img 
                    src={loopstudios}
                    alt="loopstudios website image"
                    className="website-image"
                />

                <div className="design-page-images-info">
                    <p>LOOPSTUDIOS</p>

                    <p>
                        A VR experience app made for Loopstudios
                    </p>
                </div>
            </div>

            <div className="projects projects-design-page">
                <div className="web-design project">
                    <p>WEB DESIGN</p>

                    <NavLink to="/webdesign" className="project-btn">
                        <p>
                            VIEW PROJECTS <span>
                                <img 
                                    src={iconRightArrow}
                                />
                            </span>
                        </p>
                    </NavLink>
                </div>

                <div className="graphic-design project">
                    <p>GRAPHIC DESIGN</p>

                    <NavLink to="/graphicdesign" className="project-btn">
                        <p>
                            VIEW PROJECTS <span>
                                <img 
                                    src={iconRightArrow}
                                />
                            </span>
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}