import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Toolbar.css';

const ToolBar = props =>{
 return (
        <header className="toolbar" >

           <nav  className="toolbar_navigation">

           <div>hmbg</div>

            <div className="toolbar_logo">  <a href="http://www.1way.io"> 
                <div className="logo"
                    style={{
                      overflow: 'hidden',
                      'borderRadius': "20%",
                      border: "1px solid #333333",
                      width: "80px",
                      height: "80px",
                      float: "left"
                    }}>
                    <img src="assets/img/ow_icon_cloud.png" alt="One Way Logo"/>
                </div>
              </a>
            </div>

            <div className="brand">brand here</div>
             
            <div className="toolbar_navigation_item">
              <ul>
                <li ><Link  to="/home1" className="Nav_link"> Home-1</Link></li>
                <li ><Link to="/home2" className="Nav_link"> Home-2</Link></li>
                <li><Link to="/signup" className="Nav_link"> signup</Link></li>
                <li><Link to="/login" className="Nav_link"> login</Link></li>
                <li><Link to="/register-place" className="Nav_link"> Register Place</Link></li>
                <li><Link to="/profile" className="Nav_link"> Profile</Link></li>
                <li><Link to="/map" className="Nav_link"> Map</Link></li>
                <li><Link to="/GitMapData" className="Nav_link"> GitMapData</Link></li>
                <li><Link to="/dashboard" className="Nav_link"> Dashboard</Link></li>
                <li><Link to="/HotSpotsPage" className="Nav_link"> Places</Link></li>
                <li><Link to="/UserAddressBook" className="Nav_link"> UserAddressBook</Link></li>
              </ul>
            </div>

          </nav>
      </header>
        )
}

export {ToolBar};