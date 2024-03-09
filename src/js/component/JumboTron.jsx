import React from "react";

const JumboTron = (props) => {
    return (
     
        <div className="jumbotron bg-light mb-3">
          <h1 className="display-2 ">{props.title}</h1>
          <p className="lead">{props.description}</p>
            <button className="btn btn-primary btn-lg" href="#" role="button">{props.btnLead}</button>
        
        
        
      </div>
    );
  }



export default JumboTron