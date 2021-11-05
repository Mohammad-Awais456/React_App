import React from "react";
import { NavLink } from "react-router-dom";

let ul_css={
    color:"red"
}
function Navbar() 
{
    function show_ul() 
    {
        let nav_ul=document.querySelector("#ul");
        nav_ul.classList.toggle("show_ul");
        
    }

    return (
        <>
               <nav>

                  <div id="logo" >Fire <span>EMPEROR</span>
                  
                  <span id="bar" onClick={show_ul} > <i className="fas fa-bars fa-3x" ></i></span>
                   </div>
                   <ul id="ul">
                       <li>
                           <NavLink exact to="/" activeClassName="active_page" >Home</NavLink>
                       </li>
                       <li>
                           <NavLink exact to="/services" activeClassName="active_page" >Services</NavLink>
                       </li>
                       <li>
                           <NavLink exact to="/about" activeClassName="active_page" >About</NavLink>
                       </li>
                       <li>
                           <NavLink exact to="/contact" activeClassName="active_page" >Contact</NavLink>
                       </li>
                   </ul>
               </nav>
        </>
    )
}

export default Navbar;