import React from "react"

import circle from "../assets/about/mobile/bg-pattern-hero-about-mobile.svg"
import aboutHero from "../assets/about/mobile/image-about-hero.jpg"
import worldClassTalent from "../assets/about/mobile/image-world-class-talent.jpg"
import patternSmallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import illustrationPassionate from "../assets/shared/desktop/illustration-canada.svg"
import illustrationResourceful from "../assets/shared/desktop/illustration-australia.svg"
import illustrationFriendly from "../assets/shared/desktop/illustration-united-kingdom.svg"

export default function About(){
    return(
        <div className="about">
            <img 
                src={aboutHero}
                alt="men at table on laptops, top down view"
                className="about-img"
            />

            <div className="about-us-intro">
                <img 
                    src={circle}
                    alt="background two-ovals" 
                    className="about-us-bg-image"
                />

                <h1>About Us</h1>

                <p>
                    Founded in 2010, we are a creative agency that produces lasting 
                    results for our clients. We've partnered with many 
                    startups, corporations, and nonprofits alike to craft designs 
                    that make real impact. We're always looking forward to 
                    creating brands, products, and digital experiences that 
                    connect with our clients' audiences.
                </p>
            </div>

            <img 
                src={worldClassTalent}
                alt="woman staring at images on wall"
                className="about-img"
            />

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

                    <p>PASSIONATE</p>

                    <p>
                        Each project starts with an in-depth brand 
                        research to ensure we only create products that 
                        serve a purpose. We merge art, design, and 
                        technology into exciting new solutions.
                    </p>
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

                    <p>RESOURCEFUL</p>

                    <p>
                        Everything that we do has a strategic purpose.
                        We use an agile approach in all of our projects 
                        and value customer collaboration. It guarantees 
                        superior results that fulfill our clients' needs.
                    </p>
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
    )
}