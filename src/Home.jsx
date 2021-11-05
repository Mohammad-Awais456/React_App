import React from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import home_img from "./img/home.svg";
import Common from "./Common";
function Home() 
{

    return (
        <>
                <Common 
                    img_url={home_img}
                    sub_h="We are team of talented developers making websites."
                    main_h="Grow your bussiness with"
                    btn_data="Get Started"
                />
        </>
    )
}

export default Home;