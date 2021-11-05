import React from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import home_img from "./img/home.svg";

function Common(props) 
{

    return (
        <>
              <div className="container-fluid">
                  <div className="row justify-content-center">

                  <div className="d-flex justify-content-center my-5 align-items-center flex-column col-md-6 order-2 order-md-1 col-sm-11">
                  <div className="d-flex justify-content-center align-items-start flex-column">

                     <h1>{props.main_h}</h1>
                     <h1 id="my_name" className="text-left my-3 text-info">Mohammad Awais</h1>
                     <h5>{props.sub_h}</h5>
                     <button id="startbtn" className="btn my-5 btn-outline-info">{props.btn_data}</button>
                  </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center  col-md-6 col-sm-11 order-md-2 my-4 order-1">
                      <img src={props.img_url} className="home_img w-75 img-fluid"  />
                  </div>
                  </div>

              </div>
        </>
    )
}

export default Common;