import React from "react";

function Card(props) 
{
    return (
        <>
           <div className="card m-3" >
  <img src={props.img_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" style={{borderRadius:"20px"}} className="btn btn-outline-info">Check It</a>
  </div>
</div>
        </>
    )
    
}

export default Card;