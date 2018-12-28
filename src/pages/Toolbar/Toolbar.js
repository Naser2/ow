import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const ToolBar = props =>{
 return (
        <header>
          HELLO TOOLBAR
           <nav>
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
                  <div className="brand"></div>
              </div>
            </a>
             <div>
               <ul>
                <li ><Link to="/home1" className="nav-link"> Home-1</Link></li>
                <li ><Link to="/home2" className="nav-link"> Home-2</Link></li>
                <li><Link to="/signup" className="nav-link"> signup</Link></li>
                <li><Link to="/login" className="nav-link"> login</Link></li>
                <li><Link to="/register-place" className="nav-link"> Register Place</Link></li>
                <li><Link to="/profile" className="nav-link"> Profile</Link></li>
                <li><Link to="/map" className="nav-link"> Map</Link></li>
                <li><Link to="/GitMapData" className="nav-link"> GitMapData</Link></li>
                <li><Link to="/dashboard" className="nav-link"> Dashboard</Link></li>
                <li><Link to="/HotSpotsPage" className="nav-link"> Places</Link></li>
                <li><Link to="/UserAddressBook" className="nav-link"> UserAddressBook</Link></li>
              </ul>
             </div>
           </nav>
        </header>)
}

export {ToolBar};