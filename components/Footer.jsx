import React from "react"
import { NavLink, useLocation } from "react-router-dom"

import callToAction from "../assets/shared/desktop/bg-pattern-call-to-action.svg" 
import logoLight from "../assets/shared/desktop/logo-light.png" 
import iconFacebook from "../assets/shared/desktop/icon-facebook.svg"
import iconYoutube from "../assets/shared/desktop/icon-youtube.svg"
import iconTwitter from "../assets/shared/desktop/icon-twitter.svg"
import iconPinterest from "../assets/shared/desktop/icon-pinterest.svg"
import iconInstagram from "../assets/shared/desktop/icon-instagram.svg"
 
export default function Footer(){
    const location = useLocation()

    const locationPathname = location.pathname

    const contactStyles = {
        marginTop: "4rem"
    }

    return(
        <footer style={locationPathname === "/contact" ? contactStyles : null}>
            {
                locationPathname === "/contact" 
                    ? 
                        <></> 
                    : 
                        <div className="get-in-touch-container">
                            <img 
                                src={callToAction}
                                alt="background three-ovals" 
                                className="get-in-touch-img"
                            />

                            <p>Let's talk about your project</p>

                            <p>
                                Ready to take it to the next level? Contact us 
                                today and find out how our expertise can help 
                                your business grow.
                            </p>
                            
                            <NavLink to="/contact">
                                <button className="get-in-touch-btn">GET IN TOUCH</button>
                            </NavLink>
                        </div>
            }

            <div className="footer-navlinks-container">
                <NavLink to="/">
                    <img 
                        src={logoLight}
                        alt="designo logo"
                        className="header-logo"
                        style={locationPathname === "/contact" ? contactStyles : null}
                    /> 
                </NavLink>

                <div className="divider-one"></div>

                <div className="footer-navlinks">
                    <NavLink to="/about">OUR COMPANY</NavLink>
                    <NavLink to="/locations">LOCATIONS</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            </div>

            <div className="divider-two"></div>

            <div className="company-info-container">
                <div className="company-info">
                    <span>Designo Central Office</span>

                    <p>3886 Wellington Street</p>

                    <p>Toronto, Ontario M9C 3J5</p>
                </div>

                <div className="company-info">
                    <span>Contact Us (Central Office)</span>

                    <p>P : +1 253-863-8967</p>

                    <p>M : contact@designo.co</p>
                </div>

                <div className="social-media-links">
                    <img 
                        src={iconFacebook}
                        alt="facebook icon"
                    />

                    <img 
                        src={iconYoutube}
                        alt="youtube icon"
                    />

                    <img 
                        src={iconTwitter}
                        alt="twitter icon"
                    />

                    <img 
                        src={iconPinterest}
                        alt="pinterest icon"
                    />

                    <img 
                        src={iconInstagram}
                        alt="instagram icon"
                    />
                </div>
            </div>
        </footer>
    )
}