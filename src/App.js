import React, { Component } from 'react';
import Container from './Container'
import AddressForm from './usersComponents/AddressForm'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppNavbar from './components/Layout/AppNavbar'
import Dashboard from './components/Layout/Dashboard'
import Signup from './usersComponents/Signup';
import Login from './usersComponents/Login'




class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" style={{'background-color': "#00bfff"}}> 
         <AppNavbar />
         <div className="container">
             <Switch>
             <Route exact path="/home" component={Container} />
               <Route exact path="/dashboard" component={Dashboard} />
               <Route exact path="/newAddress" component={AddressForm} /> 
               <Route exact path="/signup" component={Signup} /> 
               <Route exact path="/login" component={Login} /> 
             </Switch>
         </div>
      </div>
      </Router>
    );
  }
}

export default App;
