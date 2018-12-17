import React from 'react'
import {Link} from 'react-router-dom'


export default function Sidebar() {
  return (
    <div>
      <Link to="client/add" className="btn btn-success btn-block"></Link>
     <i className="Fas fa-plus" /> New 
    </div>
  );
}
