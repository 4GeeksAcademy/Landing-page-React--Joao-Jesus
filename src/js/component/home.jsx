import React from "react";
import NavBar from "./NavBar";
import JumboTron from "./JumboTron";
import Card from "./Card"
import Footer from "./Footer"

// include images into your bundle

// Using the pros from jsx files to render in the index file 
const Home = () => {
    return (
        <div className="container">
        <NavBar title='Start Bootstrap' />
        <JumboTron title='A warm Welcome!' description='lorem ipslum .....' btnLead='Call to action!' />   
        <div className="d-flex">
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image='https://media.istockphoto.com/id/944812540/pt/foto/mountain-landscape-ponta-delgada-island-azores.jpg?s=1024x1024&w=is&k=20&c=n0MfxHALBnYH4g5eLr6Fn4QWdqtorWvf-0P2vF279U8='/>
        <Card title='Card title' text='Some quick example text to build on the card title and make up the bulk of the card content.' btntext='Find out more' image='https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <Footer />
        </div>
    );
};

export default Home;
