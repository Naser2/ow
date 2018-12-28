import React, { Component } from 'react';
import Container from './Container'
import AddressForm from './usersComponents/AddressForm'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Dashboard from './components/Layout/Dashboard'
import Signup from './usersComponents/Signup';
import Login from './usersComponents/Login'
import Landing from './usersComponents/Landing'
import UserProfile from './usersComponents/UserProfile';
import GitMapData from './components/GitMapData';
// import User from './usersComponents/User'
import HotspotsPage from './components/Layout/HotspotsPage';
import PanelHeader from './components/PanelHeader';
import Layout from './layout';
import UserAddressBook from './usersComponents/UserAddressBook';
import { ToolBar } from './pages/Toolsbar/ToolBar';
import SideDrawer from './pages/Toolsbar/SideDrawer/SideDrawer';
import Backdrop from './pages/BackDrop/Backdrop';



class App extends Component {
  render() {
    console.log(GitMapData)
    return (
      <div className="main" style={{height:"100%" }}>
        <Router>
          <div className="App"> 
            <ToolBar />
            <SideDrawer />
            <Backdrop />
            <div className="container" >
              <Switch>
                <Route  exact path="/Home1"   component={Layout} />
                <Route  exact path= "/home2" component={Landing} />
                <Route  exact path= "/GitMapData" component={GitMapData} />
                <Route exact path="/map" component={Container} />
                <Route exact path="/map-data" component={GitMapData} /> 
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/register-place" component={AddressForm} /> 
                <Route exact path="/signup" component={Signup} /> 
                <Route exact path="/login" component={Login} /> 
                <Route exact path="/HotSpotsPage" component={HotspotsPage} /> 
                <Route exact path="/UserAddressBook" component={UserAddressBook} /> 
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
