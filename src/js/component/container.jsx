import React from "react";

const generateCard = (title, text, btnText) => {
  return (
    <div className="card" style={{ width: '18rem', height: '26rem', margin: '10px' }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
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
      <div className="jumbotron">
        <h1 className="display-4">A warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi reprehenderit sed perspiciatis nesciunt sequi porro repudiandae minima eius facere sapiente, pariatur, assumenda architecto id vel molestias nemo doloribus veritatis!</p>
    
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </p> 
      </div>

      <span className="profileCards">
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi ", "Find out more")}
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi.", "Find out more")}
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi.", "Find out more")}
        {generateCard("Card title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi.", "Find out more")}
      </span>
    </div>
  );
}

export default Jumbo;