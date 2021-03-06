import React from 'react';
import "./SideDrawer.css";
import backdrop from '../../BackDrop/Backdrop';
// import {Link} from 'react-router-dom'


const  SideDrawer = (props) =>{
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
    console.log("I received my SHOW props: ", props.show, " in SideDrawer")
  }
  
  return (
    <nav className={drawerClasses} >
      <ul>
        <li><a href="/home1" > H-1</a></li>
        <li><a href="/home2" className="Nav_link"> H-2</a></li>
        <li><a href="/register-place" className="Nav_link"> Get Ad</a></li>
        <li><a href="/profile" className="Nav_link"> Profille</a></li>
        <li><a href="/map" className="Nav_link"> Map</a></li>
        <li><a href="/GitMapData" className="Nav_link"> GitMapData</a></li>
        <li><a href="/dashboard" className="Nav_link"> Dashboard</a></li>
        <li><a href="/HotSpotsPage" className="Nav_link"> Places</a></li>
        <li><a href="/UserAddressBook" className="Nav_link"> AddressBook</a></li>
        <li><a href="/login" className="Nav_link"> login</a></li>
        <li><a href="/signup" className="Nav_link"> signup</a></li>
      </ul>
    </nav>
  )
}


export default  SideDrawer;