import React from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
function App() 
{

    return (
        <>
                <Navbar></Navbar>
                 <Switch>
                     <Route exact path="/" render={()=><Home/>} />
                     <Route exact path="/services" render={()=><Services/>} />
                     <Route exact path="/about" render={()=><About/>} />
                     <Route exact path="/contact" render={()=><Contact/>} />
                     <Redirect  path="/"></Redirect>


                 </Switch>
                 <Footer />
        </>
    )
}

export default App;