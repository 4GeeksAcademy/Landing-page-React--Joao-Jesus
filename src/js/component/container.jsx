import React from "react";


const Jumbo = () => {
        
  return (
    <div ClassName="container-fluid">
    <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p> 
        </div>
        <span className="profileCards">
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card" style={{ width: '18rem'}}>
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
</span>


   </div>
    
);
  }
export default Jumbo;