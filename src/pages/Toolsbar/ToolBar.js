import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Toolbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const logout = (props) => {
  localStorage.clear();
  window.location.href = '/'
  //props.history.replace('/')
}

const toolBar = props => {


  return (
    <header className="toolbar" style={{ width: "100%" }}>

      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo" style={{ "margin-left": "15px" }} >  <a href="http:/" alt="ow website">

          <div className="logo"
            style={{
              // overflow: 'hidden',
              'borderRadius': "20%",
              border: "0.5px solid #333333",
              width: "81.5px",
              height: "81.5px",
              float: "left"
            }}>
            <img src="/assets/img/ow_icon_cloud_80.png" alt="" />
          </div>
        </a>
        </div>

        <div className="spacer" />
        <div className="brand"
          style={{
            "margin-top": "17px", width: "300px",
            height: "33px"
          }}
        > <img src="/assets/img/ow_logo_white-1 copy.png" alt="" /></div>
        <div className="spacer" />

        <div className="toolbar_navigation_items">
          <ul>
            <li><a href="/home1" className="Nav_link"> Home</a></li>
            <li><a href="/home2" className="Nav_link"> home2</a></li>
            <li><a href="/register-place" className="Nav_link"> Get Ad</a></li>
            <li><a href="/profile" className="Nav_link"> Profille</a></li>
            <li><a href="/map" className="Nav_link"> Map</a></li>
            <li><a href="/GitMapData" className="Nav_link"> GitMapData</a></li>
            {/* <li><a href="/dashboard" className="Nav_link"> Dashboard</a></li> */}
            <li><a href="/HotSpotsPage" className="Nav_link"> Places</a></li>
            <li><a href="/UserAddressBook" className="Nav_link"> AddressBook</a></li>
            {/* <li>
                  <button class="ui teal icon left labeled button"
                  style={{
                      backgroundColor:" #E95D3E",
                      // backgroundColor:"#008080", dark teal 
                        color:"#ffffff", textShadow: "none", backgroundImage: "none",
                        borderRadius: "0 .28571429rem .28571429rem 0",
                        padding: ".58571429em 4.2em .58571429em 4.6em" ,
                        border:"#ffffff",
                        // float:"left"
                        }}>
                      <i aria-hidden="true" class="add icon"> </i>Create New Address</button>
                  </li> */}
            {localStorage.getItem('token') ? <li><Link to="/logout" onClick={() => logout(props)} className="Nav_link"> Logout</Link></li> : (
              <Fragment>
                <li><a href="/login" className="Nav_link"> Login</a></li>
                <li><a href="/signup" className="Nav_link"> signup</a></li>
              </Fragment>
            )}

          </ul>
        </div>

      </nav>
    </header>
  )
}

export default toolBar;