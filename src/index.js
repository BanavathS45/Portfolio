import React from "react";
import { createRoot } from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Routingpage from "./Portfolio/Rourtingpage";

// import Carousele from './Portfolio/Carousele'
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <BrowserRouter>
      {/*  ================Poortfolio=================== */}
      <Routingpage />
      {/*==================== carousele=================== */}
      {/* <Carousele/> */}
    </BrowserRouter>
  </>
);

// reportWebVitals();
