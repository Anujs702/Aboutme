import React from 'react';
//import {NavLink} from "react-router-dom";
import web from "../src/img/Welcome_HDVHZA.jpg";




const Ophome =(props) =>{

  return (
      <>
        <section id="header" class="d-flex align-item-center ">
        
        <div className="container-fluid nav-bg ">
      <div className="row ">
      <div className="col-10 mx-auto ">
     
      
     
      
      <div className="col-xs-13 col-sm-13 col-md-13">
        <img src={web}  className="img-fluid animated" alt="home img"></img>

        </div>
      </div>

      </div>
      </div>
     
      
      


        </section>

      </>


  );


};

export default Ophome;
