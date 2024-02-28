import React from "react"
import { NavLink } from "react-router-dom"

import circle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import express from "../assets/web-design/desktop/image-express.jpg"
import transfer from "../assets/web-design/desktop/image-transfer.jpg"
import photon from "../assets/web-design/desktop/image-photon.jpg"
import builder from "../assets/web-design/desktop/image-builder.jpg"
import blogr from "../assets/web-design/desktop/image-blogr.jpg"
import camp from "../assets/web-design/desktop/image-camp.jpg"
import iconRightArrow from "../assets/shared/desktop/icon-right-arrow.svg"

export default function WebDesign(){
    return(
        <div className="webdesign">
            <div className="webdesign-intro">
                <img 
                    src={circle}
                    alt="background two-ovals" 
                    className="webdesign-bg-image"
                />

                <h1>Web Design</h1>

                <p>
                    We build websites that serve as powerful marketing 
                    tools and bring memorable brand experiences.
                </p>
            </div>

            <div className="webdesign-images">
                <img 
                    src={express}
                    alt="express website image"
                    className="website-image"
                />

                <div className="webdesign-images-info">
                    <p>EXPRESS</p>

                    <p>
                        A multi-carrier shipping website for 
                        ecommerce businesses
                    </p>
                </div>
            </div>

            <div className="webdesign-images">
                <img 
                    src={transfer}
                    alt="transfer website image"
                    className="website-image"
                />

                <div className="webdesign-images-info">
                    <p>TRANSFER</p>

                    <p>
                        Site for low-cost money transfers and 
                        sending money within seconds
                    </p>
                </div>
            </div>

            <div className="webdesign-images">
                <img 
                    src={photon}
                    alt="photon website image"
                    className="website-image"
                />

                <div className="webdesign-images-info">
                    <p>PHOTON</p>

                    <p>
                        A state-of-the-art music player with 
                        high-resolution audio and DSP effects
                    </p>
                </div>
            </div>

            <div className="webdesign-images">
                <img 
                    src={builder}
                    alt="builder website image"
                    className="website-image"
                />

                <div className="webdesign-images-info">
                    <p>BUILDER</p>

                    <p>
                        Connects users with local contractors based 
                        on their location
                    </p>
                </div>
            </div>

            <div className="webdesign-images">
                <img 
                    src={blogr}
                    alt="blogr website image"
                    className="website-image"
                />

                <div className="webdesign-images-info">
                    <p>BLOGR</p>

                    <p>
                        Blogr is a platform for creating an 
                        online blog or publication
                    </p>
                </div>
            </div>

            <div className="webdesign-images">
                <img 
                    src={camp}
                    alt="camp website image"
                    className="website-image"
                />

                <div className="webdesign-images-info">
                    <p>CAMP</p>

                    <p>
                        Get expert training in coding, data, 
                        design, and digital-marketing
                    </p>
                </div>
            </div>

            <div className="projects projects-webdesign">
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