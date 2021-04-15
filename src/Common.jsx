import React from 'react';
import {NavLink} from "react-router-dom";
import web from "../src/img/julien-mussard-9gYeeROcqHM-unsplash1.jpg";




const Common =(props) =>{

  return (
      <>
        <section id="header" class="d-flex align-item-center ">
        
        <div className="container-fluid nav-bg ">
      <div className="row ">
      <div className="col-10 mx-auto ">
      <div className="row " >
      <div className="col-xs-6 col-sm-6 col-md-6 ">
      
     
      
      <h1 className="my-4">{props.name} <strong>Anuj</strong></h1>
      <h2 className="my-3" > I am a driven individual with the
      ability to adapt to any situation <br></br> and proven potential to grow self and others and a person with a very
      calm personality</h2>
      <div>
        <NavLink  class="btn btn-secondary zoom"   to={props.viit}>{props.btnam}</NavLink>
        <h2 className="my-3" >  If you are fearful,<br></br> a horse will back off.<br></br> If you are calm and confident, <br></br>it will come forward.<br></br> For those who are often flattered or feared, <br></br>the horse can be a welcome mirror of the best in human nature.</h2>

      </div>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6">
        <img src={web}  className="img-fluid animated" alt="home img"></img>

        </div>
      </div>

      </div>
      </div>
      </div>
      
      


        </section>

      </>


  );


};

export default Common;
