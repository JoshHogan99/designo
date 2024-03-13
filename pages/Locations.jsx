import React from "react"

import canadaMapImg from "../assets/locations/desktop/image-map-canada.png"
import australiaMapImg from "../assets/locations/desktop/image-map-australia.png"
import unitedKingdomMapImg from "../assets/locations/desktop/image-map-united-kingdom.png"

import canadaMapImgTablet from "../assets/locations/tablet/image-map-canada.png"
import australiaMapImgTablet from "../assets/locations/tablet/image-map-australia.png"
import unitedKingdomMapImgTablet from "../assets/locations/tablet/image-map-uk.png"

import circle from "../assets/shared/desktop/bg-pattern-small-circle.svg"
import twoCircles from "../assets/shared/desktop/bg-pattern-two-circles.svg"

export default function Locations(){
    return(
        <div className="locations">
            <div className="locations-info-container">
                <img 
                    src={canadaMapImg}
                    alt="canada google maps"
                    className="location-img locations-right"
                />

                <img 
                    src={canadaMapImgTablet}
                    alt="canada google maps"
                    className="location-img-tablet"
                />

                <div className="locations-info">
                    <img 
                        src={circle}
                        alt="background oval" 
                        className="locations-bg-img"
                    />

                    <img 
                        src={twoCircles}
                        alt="two circles background"
                        className="locations-bg-img-tablet"
                    />

                    <p className="locations-heading">Canada</p>

                    <div className="location-info-container">
                        <div className="location-info">
                            <span>Designo Central Office</span>

                            <p>3886 Wellington Street</p>

                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>

                        <div className="location-info">
                            <span>Contact</span>

                            <p>P : +1 253-863-8967</p>

                            <p>M : contact@designo.co</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="locations-info-container">
                <img 
                    src={australiaMapImg}
                    alt="woman staring at images on wall"
                    className="location-img"
                />

                <img 
                    src={australiaMapImgTablet}
                    alt="australia google maps"
                    className="location-img-tablet"
                />

                <div className="locations-info">
                    <img 
                        src={circle}
                        alt="background oval" 
                        className="locations-bg-img"
                    />

                    <img 
                        src={twoCircles}
                        alt="two circles background"
                        className="locations-bg-img-tablet"
                    />

                    <p className="locations-heading">Australia</p>

                    <div className="location-info-container">
                        <div className="location-info">
                            <span>Designo AU Office</span>

                            <p>19 Balonne Street</p>

                            <p>New South Wales 2443</p>
                        </div>

                        <div className="location-info">
                            <span>Contact</span>

                            <p>P : (02) 6720 9092</p>

                            <p>M : contact@designo.au</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="locations-info-container locations-bottom">
                <img 
                    src={unitedKingdomMapImg}
                    alt="woman staring at images on wall"
                    className="location-img locations-right"
                />

                <img 
                    src={unitedKingdomMapImgTablet}
                    alt="united kingdom google maps"
                    className="location-img-tablet"
                />

                <div className="locations-info">
                    <img 
                        src={circle}
                        alt="background oval" 
                        className="locations-bg-img"
                    />

                    <img 
                        src={twoCircles}
                        alt="two circles background"
                        className="locations-bg-img-tablet"
                    />

                    <p className="locations-heading">United Kingdom</p>

                    <div className="location-info-container">
                        <div className="location-info">
                            <span>Designo UK Office</span>

                            <p>13 Colorado Way</p>

                            <p>Rhyd-y-fro SA8 9GA</p>
                        </div>

                        <div className="location-info">
                            <span>Contact</span>

                            <p>P : 078 3115 1400</p>

                            <p>M : contact@designo.uk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}