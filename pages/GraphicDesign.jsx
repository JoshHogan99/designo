import React from "react"
import { NavLink } from "react-router-dom"

import circle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import tabletCircles from "../assets/web-design/desktop/bg-pattern-intro-web.svg"
import science from "../assets/graphic-design/desktop/image-science.jpg"
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg"
import change from "../assets/graphic-design/desktop/image-change.jpg"
import iconRightArrow from "../assets/shared/desktop/icon-right-arrow.svg"

export default function GraphicDesign(){
    return(
        <div className="design-page graphic-design-page">
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

                <h1>Graphic Design</h1>

                <p>
                    We deliver eye-catching branding materials that are 
                    tailored to meet your business objectives.
                </p>
            </div>

            <div className="design-page-images-container">
                <div className="design-page-images">
                    <img 
                        src={change}
                        alt="change website image"
                        className="design-page-image"
                    />

                    <div className="design-page-images-info">
                        <p>TIM BROWN</p>

                        <p>
                            A book cover designed for Tim Brown's new 
                            release, 'Change'
                        </p>
                    </div>
                </div>

                <div className="design-page-images">
                    <img 
                        src={boxedWater}
                        alt="boxed water website image"
                        className="design-page-image"
                    />

                    <div className="design-page-images-info">
                        <p>BOXED WATER</p>

                        <p>
                            A simple packaging concept made for Boxed Water
                        </p>
                    </div>
                </div>

                <div className="design-page-images">
                    <img 
                        src={science}
                        alt="science website image"
                        className="design-page-image"
                    />

                    <div className="design-page-images-info">
                        <p>SCIENCE!</p>

                        <p>
                            A poster made in collaboration with the Federal 
                            Art Project
                        </p>
                    </div>
                </div>
            </div>

            <div className="projects projects-design-page">
                <div className="app-design project">
                    <p>APP DESIGN</p>

                    <NavLink to="/appdesign" className="project-btn">
                        <p>
                            VIEW PROJECTS <span>
                                <img 
                                    src={iconRightArrow}
                                />
                            </span>
                        </p>
                    </NavLink>
                </div>

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
            </div>
        </div>
    )
}