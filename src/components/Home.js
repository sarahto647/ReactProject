import React, { Component, useState } from "react";
//import './App.css';
import { NavLink } from "react-router-dom";

export default class Home extends Component {
 render()  { return(
  // function Home() {
  //  return (
   <div>
   <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                New here? Register Now!
              </NavLink>
              </div>)
 // )
}
}
//export default Home;