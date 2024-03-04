import React from "react"
import { NavLink } from "react-router-dom"

import patternHeroHome from "../assets/home/desktop/bg-pattern-hero-home.svg"
import imageHeroPhone from "../assets/home/desktop/image-hero-phone.png" 
import iconRightArrow from "../assets/shared/desktop/icon-right-arrow.svg" 
import patternSmallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import illustrationPassionate from "../assets/home/desktop/illustration-passionate.svg"
import illustrationResourceful from "../assets/home/desktop/illustration-resourceful.svg"
import illustrationFriendly from "../assets/home/desktop/illustration-friendly.svg"

export default function Home(){
    return(
        <div className="home">
            <div className="home-intro">
                <img 
                    src={patternHeroHome}
                    alt="background oval" 
                    className="home-oval"
                />

                <div className="home-content">
                    <h1>
                        Award-winning custom designs and digital branding 
                        solutions
                    </h1>

                    <p>
                        With over 10 years in the industry, we are experienced 
                        in creating fully responsive websites, app design, and 
                        engaging brand experiences. Find out more about our 
                        services.
                    </p>

                    <NavLink to="/about">
                        <button className="learn-more-btn">LEARN MORE</button>
                    </NavLink>
                </div>

                <img 
                    src={imageHeroPhone}
                    className="home-hero-phone"
                />
            </div>

            <div className="projects">
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

            <div className="illustrations">
                <div className="illustration">
                    <img 
                        src={patternSmallCircle}
                        className="illustrations-background"
                    />

                    <img 
                        src={illustrationPassionate}
                        className="passionate-illustration"
                    />

                    <div className="illustration-p-container">
                        <p>PASSIONATE</p>

                        <p>
                            Each project starts with an in-depth brand 
                            research to ensure we only create products that 
                            serve a purpose. We merge art, design, and 
                            technology into exciting new solutions.
                        </p>
                    </div>
                </div>

                <div className="illustration">
                    <img 
                        src={patternSmallCircle}
                        className="illustrations-background resourceful-circle"
                    />
                    
                    <img 
                        src={illustrationResourceful}
                        className="resourceful-illustration"
                    />

                    <div className="illustration-p-container">
                        <p>RESOURCEFUL</p>

                        <p>
                            Everything that we do has a strategic purpose.
                            We use an agile approach in all of our projects 
                            and value customer collaboration. It guarantees 
                            superior results that fulfill our clients' needs.
                        </p>
                    </div>
                </div>

                <div className="illustration">
                    <img 
                        src={patternSmallCircle}
                        className="illustrations-background friendly-circle"
                    />

                    <img 
                        src={illustrationFriendly}
                        className="friendly-illustration"
                    />

                    <div className="illustration-p-container">
                        <p>FRIENDLY</p>

                        <p>
                            We are a group of enthusiastic folks who know 
                            how to put people first. Our success depends on 
                            our customers, and we strive to give them the 
                            best experience a company can provide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}