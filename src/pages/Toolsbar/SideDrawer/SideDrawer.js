import React from 'react';
import "./SideDrawer.css";
import {Link} from 'react-router-dom'


export default function SideDrawer(props) {
  return (
    <nav className="side-drawer">
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
