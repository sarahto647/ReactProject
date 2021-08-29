import React, { Component, useState } from "react";
// This will require to npm install axios
import axios from 'axios';
import './Navbar.css';
//import Welcome from './Welcome';
///import Create from "./create";
import {BrowserRouter as Router, Route, Redirect, Switch, useHistory } from "react-router-dom";


export default class Login extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonUserName = this.onChangePersonUserName.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    fullName: "",
    username: "",
    email: "",
    password: ""
    };
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
        fullName: e.target.value,
    });
  }

  onChangePersonUserName(e) {
    this.setState({
        username: e.target.value,
    });
  }

  onChangePersonPassword(e) {
    this.setState({
        password: e.target.value,
    });
  }

  onChangePersonEmail(e) {
    this.setState({
        email: e.target.value,
    });
  }


  onChangePersonPosition(e) {
    this.setState({
      person_position: e.target.value,
    });
  }

  onChangePersonLevel(e) {
    this.setState({
      person_level: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();    
}



// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
   
    "fullName": this.state.fullName,
    "username": this.state.username,
    "email": this.state.email,
    "password": this.state.password

    };

    axios
       .post("http://localhost:4000/app/login", newperson)
      .then((res) => {console.log(res.data);

   window.location.href = '/Welcome';

  const userreq = [newperson.username];
  localStorage.setItem("user", JSON.stringify(userreq));
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
   this.props.history.push({pathname:'/Welcome', state:{location:res.data}});
      })

      
      .catch((error) => console.log(error));

      
    // We will empty the state after posting the data to the database
    this.setState({

    fullName: "",
    username: "",
    password: "",
    email: ""
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>UserName of the person: </label>
            <input
              type="text"
              className="form-control"
            value={this.state.username}
              onChange={this.onChangePersonUserName}
            />
          </div>
         
          <div className="form-group">
            <label>Person's password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePersonPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
              onSubmit={this.onSubmit}
              
            />


          </div>
        </form>
        
      </div>
    );
  }
}