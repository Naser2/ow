import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { SketchPicker } from 'react-color';



export default class AppNavbar extends Component {
  render() {
    const style ={
      background: "rgba(27,202,255,.8)"
    }
    return ( 
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
          <div  className="container">
          <React.Fragment>
                <div class="navbar-header">
                    <button id="menu-toggle" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar bar1"></span>
                    <span class="icon-bar bar2"></span>
                    <span class="icon-bar bar3"></span>
                    </button>
                    <a href="http://www.1way.io">
                        <div class="logo-container">
                            <div class="logo">
                                <img src="assets/img/ow_icon_cloud.png" alt="One Way Logo" />
                            </div>
                            <div class="brand">
                               
                            </div>
                        </div>
                    </a>
                </div>
              </React.Fragment>
            <Link to="/" className="navbar-brand">
            {/* <img src="assets/img/ow_logo_white.png" alt="One Way Logo" style={{ overflow: "hidden", width: "90px",float: "left"}} /> */}
            </Link>
          <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
          <React.Fragment>
                <div class="collapse navbar-collapse navbar-right" id="example" >
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><i class="fa fa-facebook-square"></i>Like</a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i>Tweet</a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i> Pin</a></li>
                    </ul>
                </div>
           </React.Fragment>
            <li className="nav-item"><Link to="/home" className="nav-link"> Home</Link></li>
            <li className="nav-item"><Link to="/gitMapData" className="nav-link"> Map data </Link></li>
            <li className="nav-item"><Link to="/dashboard" className="nav-link"> Dashboard</Link></li>
            <li><Link to="/newAddress" className="nav-link"> AddressForm</Link></li>
            <li className="nav-item"><Link to="/map" className="nav-link"> Map</Link></li>
            <li><Link to="/signup" className="nav-link"> signup</Link></li>
            <li><Link to="/login" className="nav-link"> login</Link></li>
            <li className="nav-item"><Link to="/profile" className="nav-link"> Profile</Link></li>

          </ul>
        </div>
      </div>
    </nav> 
    )
  }
}
