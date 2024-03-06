import React from "react";

const generateCard = (title, text, btnText) => {
  return (
    <div className="card bg-light mb-3" style={{ margin: '10px' }}>
      <img className="card-img-top" src=""  width="500"
        height="325" />
        <div className="alt-text">500 X 300</div>
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  );
}

const Jumbo = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron bg-light mb-3">
        <h1 className="display-2 ">A warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi reprehenderit sed perspiciatis nesciunt sequi porro repudiandae minima eius facere sapiente, pariatur, assumenda architecto id vel molestias nemo doloribus veritatis!</p>
    
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </p> 
      </div>
      <div className="container-fluid">
      <span className="profileCards">
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi ", "Find out more")}
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi.", "Find out more")}
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi.", "Find out more")}
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi.", "Find out more")}
      </span>
      </div>
    </div>
  );
}

export default Jumbo;