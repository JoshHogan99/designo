import React, { useState } from "react"
import { NavLink } from "react-router-dom"
 
export default function Header(){
    const [showNav, setShowNav] = useState(false)

    function handleNav(){
        setShowNav(setShowNav => !setShowNav)
    }

    return(
        <header>
            <div className="header">
                <NavLink to="/">
                    <img 
                        src="../assets/shared/desktop/logo-dark.png" 
                        alt="designo logo"
                        className="header-logo"
                    /> 
                </NavLink>

                <img 
                    src={
                        showNav
                            ? "../assets/shared/mobile/icon-close.svg"
                            : "../assets/shared/mobile/icon-hamburger.svg"
                    }
                    alt={showNav ? "close nav" : "open nav"}
                    onClick={handleNav}
                    className="menu-icon"
                />
            </div>

            {showNav && <div className="page-overlay" onClick={handleNav}></div>}

            {showNav && (
                <div className="header-navlinks">
                    <NavLink to="/about">OUR COMPANY</NavLink>
                    <NavLink to="/locations">LOCATIONS</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
            )}
        </header>
    )
}