import React from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import home_img from "./img/about.svg";
import Common from "./Common";

function About() 
{

    return (
        <>
                 <Common 
                    img_url={home_img}
                    sub_h="Explore my talent & take a decision"
                    main_h="Do you want to Know About"
                    btn_data="Upwork Account"
                />
        </>
    )
}

export default About;