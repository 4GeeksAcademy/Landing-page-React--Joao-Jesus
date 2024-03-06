import React from "react";

const NavBar = () => {
        
    return (
        <nav className="Nav navbar navbar-dark fixed-top">
                <li className="first"><a href="#" url="https://getbootstrap.com/">Start Bootsrap</a></li>
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