import React from "react";



const NavBar = () => {
        
    return (
        <nav className="Nav navbar fixed-top navbar">
                <li className="first"><a href="#" url="https://getbootstrap.com/">Start Bootsrap</a></li>
                <nav className="" aria-controls="responsive-navbar-nav" />
            
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