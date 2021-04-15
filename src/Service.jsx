import React from 'react';
import Card from "./Card";
import sdata from "./sdata";



const Service =() =>{

  return (
      <>
        






        <div className="container-fluid">
      <div className="row">
      <div className="col-10 mx-auto">

      <div className="col-xs-12 col-sm-12 col-md-12 nop1 "><strong>Interests</strong></div>
      <div className="row " >
      <div className="col-xs-6 col-sm-6 col-md-6 ">
          <Card 
            nam={sdata[0].nam}
            link={sdata[0].link}
            sname={sdata[0].sname}

            /></div> <div className="col-xs-6 col-sm-6 col-md-6 ">
             <Card 
            nam={sdata[1].nam}
            link={sdata[1].link}
            sname={sdata[1].sname}

            /></div> <div className="col-xs-6 col-sm-6 col-md-6 ">
             <Card 
            nam={sdata[2].nam}
            link={sdata[2].link}
            sname={sdata[2].sname}

            /></div><div className="col-xs-6 col-sm-6 col-md-6 ">
             <Card 
            nam={sdata[3].nam}
            link={sdata[3].link}
            sname={sdata[3].sname}

            />
            </div>


      </div>
      </div>
      </div>
      </div>
      

      </>


  );


};

export default Service;
