import React from "react"

import circle from "../assets/contact/desktop/bg-pattern-hero-desktop.svg"
import patternSmallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import illustrationCanada from "../assets/shared/desktop/illustration-canada.svg"
import illustrationAustralia from "../assets/shared/desktop/illustration-australia.svg"
import illustrationUnitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg"

export default function Contact(){
    return(
        <div className="contact">
            <div className="contact-us-intro">
                <img 
                    src={circle}
                    alt="background oval" 
                    className="contact-us-bg-image-one"
                />

                <img 
                    src={circle}
                    alt="background oval" 
                    className="contact-us-bg-image-two"
                />

                <div className="contact-us-info-container">
                    <div className="contact-us-info">
                        <h1>Contact Us</h1>

                        <p>
                            Ready to take it to the next level? Let's talk about 
                            your project or idea and find out how we can help 
                            your business grow. If you are looking for unique 
                            digital experiences that's relatable to your users, 
                            drop us a line.
                        </p>
                    </div>

                    <form>
                        <input 
                            type="text" 
                            className="form-input" 
                            name="full-name" 
                            placeholder="Name" 
                            required
                        />

                        <input 
                            type="email" 
                            className="form-input" 
                            name="email" 
                            placeholder="Email Address" 
                            required
                        />

                        <input 
                            type="number" 
                            className="form-input" 
                            name="phone-number" 
                            placeholder="Phone" 
                            required
                        />

                        <textarea 
                            className="text-area-input" 
                            name="message" 
                            placeholder="Your Message"
                            required 
                        />

                        <button 
                            type="submit"
                        >
                            SUBMIT
                        </button>
                    </form>
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
        </div>
        
    )
}