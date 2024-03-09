import React from "react";


const Card = ( {title, text, btntext, image}) => {
    return (
        <div className="card">
        <img className="card-img-top" src={image} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">{btntext}</a>
        </div>
      </div>
    );
  }

export default Card