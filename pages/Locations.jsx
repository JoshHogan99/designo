import React from "react"

import canadaMapImg from "../assets/locations/desktop/image-map-canada.png"
import australiaMapImg from "../assets/locations/desktop/image-map-australia.png"
import unitedKingdomMapImg from "../assets/locations/desktop/image-map-united-kingdom.png"

export default function Locations(){
    return(
        <div className="locations">
            <img 
                src={canadaMapImg}
                alt="woman staring at images on wall"
                className="about-img"
            />

            <div className="locations-info">
                <p className="locations-heading">Canada</p>

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

            <img 
                src={australiaMapImg}
                alt="woman staring at images on wall"
                className="about-img"
            />

            <div className="locations-info">
                <p className="locations-heading">Australia</p>

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

            <img 
                src={unitedKingdomMapImg}
                alt="woman staring at images on wall"
                className="about-img"
            />

            <div className="locations-info">
                <p className="locations-heading">United Kingdom</p>

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
    )
}