import React from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import Card from "./Card";
import data from "./data";
function Services() 
{

    return (
        <>
        <h1 className="text-center my-5">Our Services</h1>
        <div className="card_container">

               {
                      data.map((val,index)=><Card key={index} title={val.name} img_url={val.img} />)
               } 
               
        </div>
        </>
    )
}

export default Services;