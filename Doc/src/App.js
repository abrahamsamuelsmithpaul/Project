
import firebaseDb from "../src/firebase";
import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Save from './components/save';
import About from './components/About';
import virtualAppointment from './components/virtualAppointment';
import Home from "./components/Home";
import Login from "./components/login";


function App() {
  return (
    <Router>
    <div className="App">        
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
  <Link className="navbar-brand" to={"/Home"}></Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Doctor login</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to={"/Home"}>Home</Link>
            </li>
            
            
            <li className="nav-item">
              <Link className="nav-link" to={"/virtualAppointment"}>Virtual Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/About"}>About</Link>
            </li>
           
        
           
          </ul>
        </div>
      </div>
      </nav>
      
    

    <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/save" component={Save} />
          <Route path="/virtualAppointment" component={virtualAppointment} />
          <Route path="/About" component={About} />
          <Route path="/Home" component={Home} />
    

        </Switch>
     
      </div>
   
      </Router>
  
  );
}
export default App;
