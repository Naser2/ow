import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react';

export default class UserHeader extends Component {
  render() {
    return (
     
      <Image circular src='/assets/img/mike.jpg' style={{
            borderRadius: "500em",
            display:" inline-block",
            width: "8.5em",
            height: "auto",
            verticalAlign: 'middle',
            fontFamily:" Lato , Helvetica Neue, Arial,Helvetica, sans-serif",
            fontWeight: "700",
            lineHeight: "1.28571429em",
            textTransform:"none",
            color: "white"
    }} /> 
   )
    
  }
}
