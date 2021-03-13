import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap.css";
import Navbar from "./components/navbar/Navbar";
import Startdrivingheader from "./components/startdrivingheader/Startdrivingheader";
import Aboutusmain from "./components/aboutusmain/Aboutusmain";
import Inventorymain from "./components/inventorymain/Inventorymain";
import Contactus from "./components/contactus/Contactus";
import Footer from "./components/footer/Footer";
//import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Startdrivingheader />
    <Aboutusmain />
    <div id="hr">
      <hr class="container" />
    </div>

    <Inventorymain />
    <Contactus />
    <Footer />

    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
