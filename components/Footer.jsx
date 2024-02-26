import React from "react"
import { NavLink } from "react-router-dom"
 
export default function Footer(){
    return(
        <footer>
            <div className="get-in-touch-container">
                <img 
                    src="../assets/shared/desktop/bg-pattern-call-to-action.svg" 
                    alt="SVG background three-ovals" 
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

            <NavLink to="/">
                <img 
                    src="../assets/shared/desktop/logo-light.png" 
                    alt="designo logo"
                    className="header-logo"
                /> 
            </NavLink>

            <div className="divider"></div>

            <div className="footer-navlinks">
                <NavLink to="/about">OUR COMPANY</NavLink>
                <NavLink to="/locations">LOCATIONS</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>

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
                    src="../assets/shared/desktop/icon-facebook.svg"
                    alt="facebook icon"
                />

                <img 
                    src="../assets/shared/desktop/icon-youtube.svg"
                    alt="youtube icon"
                />

                <img 
                    src="../assets/shared/desktop/icon-twitter.svg"
                    alt="twitter icon"
                />

                <img 
                    src="../assets/shared/desktop/icon-pinterest.svg"
                    alt="pinterest icon"
                />

                <img 
                    src="../assets/shared/desktop/icon-instagram.svg"
                    alt="instagram icon"
                />
            </div>
        </footer>
    )
}