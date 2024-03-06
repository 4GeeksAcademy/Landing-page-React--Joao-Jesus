import React from "react";
import NavBar from "./nav.jsx";
import Jumbo from "./container.jsx";
import Footer from "./footer.jsx"; // Make sure to correct the import path

// include images into your bundle

// create your first component
const Home = () => {
    return (
        <div>
            <NavBar />
            <Jumbo />
            <Footer /> 
            {/* Uncomment and include other components if needed */}
            
        </div>
    );
};

export default Home;
