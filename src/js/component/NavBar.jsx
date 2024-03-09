import React from "react";

const NavBar = (props) => {
        
    const navArray = ['Home', 'About', 'Service', 'Contact']

    const navBtn = navArray.map((link) => {
        return <a>{link}</a>
    } )

    return (
        <nav className="Nav navbar fixed-top navbar">
                <li className="first"><a href="#" url="https://getbootstrap.com/">{props.title}</a></li>
                <nav className="" aria-controls="responsive-navbar-nav" />
                <span className="linksNav">
                    
                <a className="serie1">{navBtn}</a>
               
                </span>
            
        </nav>
    );
}





export default NavBar