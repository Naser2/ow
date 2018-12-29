import React, { Component } from 'react'
import './Toolbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';


const toolBar = props => { 
 return (
        <header className="toolbar" >
 
           <nav  className="toolbar_navigation">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo">  <a href="#" alt="One Way Logo"> 
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

            <div className="spacer"/>
            <div className="brand">brand</div>
            <div className="spacer"/>

            <div className="toolbar_navigation_items">
              <ul>
                <li><a href="/home1" className="Nav_link"> H-1</a></li>
                <li><a href="/home2" className="Nav_link"> H-2</a></li>
                <li><a href="/register-place" className="Nav_link"> Get Ad</a></li>
                <li><a href="/profile" className="Nav_link"> Profille</a></li>
                <li><a href="/map" className="Nav_link"> Map</a></li>
                <li><a href="/GitMapData" className="Nav_link"> GitMapData</a></li>
                {/* <li><a href="/dashboard" className="Nav_link"> Dashboard</a></li> */}
                <li><a href="/HotSpotsPage" className="Nav_link"> Places</a></li>
                <li><a href="/UserAddressBook" className="Nav_link"> AddressBook</a></li>
                
                <li><a href="/login" className="Nav_link"> login</a></li>
                <li><a href="/signup" className="Nav_link"> signup</a></li>
              </ul>
            </div>

          </nav>
      </header>
        )
}

export default toolBar;