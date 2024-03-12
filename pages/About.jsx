import React from "react"

import circle from "../assets/about/mobile/bg-pattern-hero-about-mobile.svg"

import aboutHero from "../assets/about/mobile/image-about-hero.jpg"
import worldClassTalent from "../assets/about/mobile/image-world-class-talent.jpg"
import realDeal from "../assets/about/mobile/image-real-deal.jpg"

import aboutHeroTablet from "../assets/about/tablet/image-about-hero.jpg"
import worldClassTalentTablet from "../assets/about/tablet/image-world-class-talent.jpg"
import realDealTablet from "../assets/about/tablet/image-real-deal.jpg"

import aboutHeroDesktop from "../assets/about/desktop/image-about-hero.jpg"
import worldClassTalentDesktop from "../assets/about/desktop/image-world-class-talent.jpg"
import realDealDesktop from "../assets/about/desktop/image-real-deal.jpg"

import patternSmallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import illustrationCanada from "../assets/shared/desktop/illustration-canada.svg"
import illustrationAustralia from "../assets/shared/desktop/illustration-australia.svg"
import illustrationUnitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg"

export default function About(){
    return(
        <div className="about">
            <div className="about-us-intro-container">
                <img 
                    src={aboutHero}
                    alt="men at table on laptops, top down view"
                    className="about-img"
                />

                <img 
                    src={aboutHeroTablet}
                    alt="men at table on laptops, top down view"
                    className="about-img-tablet"
                />

                <img 
                    src={aboutHeroDesktop}
                    alt="men at table on laptops, top down view"
                    className="about-img-desktop"
                />

                <div className="about-us-intro">
                    <img 
                        src={circle}
                        alt="background oval" 
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
            </div>

            <div className="about-us-info-container">
                <img 
                    src={worldClassTalent}
                    alt="woman staring at images on wall"
                    className="about-img"
                />

                <img 
                    src={worldClassTalentTablet}
                    alt="woman staring at images on wall"
                    className="about-img-tablet"
                />

                <img 
                    src={worldClassTalentDesktop}
                    alt="woman staring at images on wall"
                    className="about-img-desktop"
                />

                <div className="about-us-info">
                    <p>World-class talent</p>

                    <p>
                        We are a crew of strategists, problem-solvers, 
                        and technologists. Every design is thoughtfully 
                        crafted from concept to launch, ensuring success 
                        in its given market. We are constantly updating 
                        our skills in a myriad of platforms.
                    </p>

                    <p>
                        Our team is multi-disciplinary and we are not 
                        merely interested in form — content and meaning 
                        are just as important. We give great importance 
                        to craftsmanship, service, and prompt delivery. 
                        Clients have always been impressed with our 
                        high-quality outcomes that encapsulates their 
                        brand's story and mission.
                    </p>
                </div>
            </div>

            <div className="illustrations">
                <div className="illustration">
                    <img 
                        src={patternSmallCircle}
                        className="illustrations-background canada-circle"
                    />

                    <img 
                        src={illustrationCanada}
                        className="canada-illustration"
                    />

                    <p>CANADA</p>

                    <a 
                        href="https://maps.app.goo.gl/NEHbJFaVUQRGCG4o6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="see-location-btn">SEE LOCATION</button>
                    </a>
                </div>

                <div className="illustration">
                    <img 
                        src={patternSmallCircle}
                        className="illustrations-background"
                    />
                    
                    <img 
                        src={illustrationAustralia}
                        className="australia-illustration"
                    />

                    <p>AUSTRALIA</p>

                    <a 
                        href="https://maps.app.goo.gl/M8mBAgjW9My3nhYC6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="see-location-btn">SEE LOCATION</button>
                    </a>
                </div>

                <div className="illustration">
                    <img 
                        src={patternSmallCircle}
                        className="illustrations-background united-kingdom-circle"
                    />

                    <img 
                        src={illustrationUnitedKingdom}
                        className="united-kingdom-illustration"
                    />

                    <p>UNITED KINGDOM</p>

                    <a 
                        href="https://maps.app.goo.gl/qERBr67VUcdF4GdZ6"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="see-location-btn">SEE LOCATION</button>
                    </a>
                </div>
            </div>

            <img 
                src={realDeal}
                alt="woman staring at images on wall"
                className="about-img"
            />

            <img 
                src={realDealTablet}
                alt="woman staring at images on wall"
                className="about-img-tablet"
            />

            <img 
                src={realDealDesktop}
                alt="woman staring at images on wall"
                className="about-img-desktop"
            />

            <div className="about-us-info">
                <p>The real deal</p>

                <p>
                    As strategic partners in our clients' business, 
                    we are ready to take on any challenge as our own. 
                    Solving real problems require empathy and 
                    collaboration, and we strive to bring a fresh 
                    perspective to every opportunity. We make design 
                    and technology more accessible and give you tools 
                    to measure success.
                </p>

                <p>
                    We are visual storytellers in appealing and 
                    captivating ways. By combinining business and 
                    marketing strategies, we inspire audiences to 
                    take action and drive real results.
                </p>
            </div>
        </div>
    )
}