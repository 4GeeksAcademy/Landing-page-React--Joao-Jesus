import React from "react";

const NavBar = () => {
        
    return (
        <nav className="Nav navbar navbar-dark">
                <li className="first"><a href="#">Start Bootsrap</a></li>
                <span className="linksNav">
                <li className="serie"><a href="#">Home</a></li>
                <li className="serie"><a href="#">About</a></li>
                <li className="serie"><a href="#">Services</a></li>
                <li className="serie "><a href="#">Contact</a></li>
                </span>
            
        </nav>
    );
}

export default NavBar;