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
            <Link to="/" className="navbar-brand">
              Admin Pannel
            </Link>
          <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/home" className="nav-link"> Home</Link></li>
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
