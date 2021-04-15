import React from "react";


function Card(props)
{
    return(
        <>
 

 <div className="col-8 mx-auto">
      <div class="card">
  <img class="card-img-top" src={props.link} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{}</p>
    <a href="#" class="btn btn-primary">{props.sname}</a>
  </div>
    </div>
      </div>

        </>
        );
    
}
export default Card;
