import React from "react";
import React_Dom from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App"; 

React_Dom.render(
<BrowserRouter>

    <App></App>
</BrowserRouter>
    ,document.getElementById("root"));
