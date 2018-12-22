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
                <div className="navbar-header">
                    <button id="menu-toggle" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar bar1"></span>
                    <span className="icon-bar bar2"></span>
                    <span className="icon-bar bar3"></span>
                    </button>
                    <a href="http://www.1way.io">
                        <div className="logo-container" >
                            <div className="logo" style={{
                                  overflow: 'hidden',
                                 'borderRadius': "20%",
                                  border: "1px solid #333333",
                                  width: "80px",
                                  height: "80px",
                                  float: "left"
                                }}>
                                <img src="assets/img/ow_icon_cloud.png" alt="One Way Logo" 
                                 />
                            </div>
                            <div className="brand">
                               
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
                <div className="collapse navbar-collapse navbar-right" id="example" >
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><i className="fa fa-facebook-square"></i>Like</a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i>Tweet</a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i> Pin</a></li>
                    </ul>
                </div>
           </React.Fragment>
            <li className="nav-item"><Link to="/home" className="nav-link"> Home</Link></li>
            <li className="nav-item"><Link to="/dashboard" className="nav-link"> Dashboard</Link></li>
            <li><Link to="/register-place" className="nav-link"> Register Place</Link></li>
            <li className="nav-item"><Link to="/map" className="nav-link"> Map</Link></li>
            <li><Link to="/signup" className="nav-link"> signup</Link></li>
            <li><Link to="/login" className="nav-link"> login</Link></li>
            <li className="nav-item"><Link to="/profile" className="nav-link"> Profile</Link></li>
            <li className="nav-item"><Link to="/GitMapData" className="nav-link"> GitMapData</Link></li>

          </ul>
        </div>
      </div>
    </nav> 
    )
  }
}
