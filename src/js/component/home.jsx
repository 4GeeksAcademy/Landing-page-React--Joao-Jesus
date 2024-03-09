import React from "react";
import NavBar from "./NavBar";
import JumboTron from "./JumboTron";
import Card from "./Card"
import Footer from "./Footer"

// include images into your bundle

// create your first component
const Home = () => {
    return (
        <div>
        <NavBar title='Start Bootstrap' />
        <JumboTron title='A warm Welcome!' description='lorem ipslum .....' btnLead='Call to action!' />   
        <div className="d-flex">
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image=''/>
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image=''/>
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image=''/>
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image=''/>
        
        </div>
        <Footer />
        </div>
    );
};

export default Home;
