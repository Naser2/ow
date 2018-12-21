import React, { Component, Fragment } from 'react'
import { Input } from 'semantic-ui-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

export default class GitMapData extends Component {
 

  state = {findAdress:''}



  handleInputChange = (e) => {
  console.log("CHANGING VALUE:", e.target.value)
  this.setState({
    findAdress:e.target.value
  }, () => console.log(this.state)) 
  }
  handleSearchSubmit =(e)=> {
    alert('A name was submitted: ' + this.state.findAdress);
    e.preventDefault();

  }

  conponentDidMount(){
  
  }

  render() {
    
    return (   
  <Fragment>
    <h1>Search from GitMap Data</h1> 
  
    <form onSubmit={this.handleSearchSubmit}
          onChange={(e) => this.handleInputChange(e)}
          type="text"
          value={this.state.findAdress}
          placeholder="Search...">
      <input 
          style={{boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `320px`,
          height: `47px`,
          marginTop: `30px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses` ,
          backgroundColor:"white"}}
          />

          <input type="text" placeholder="Search..."/>
          <button class="ui icon button" style={{'content': "\f002",
          background: "0 0!important",
          'box-sizing': "inherit",
          fontSize:"1em",
          opacity: ".9",
          margin: "0!important",
          'vertical-align': "top",
          
          height: ".85714286em"
          
         
}}> 
        <i aria-hidden="true" class="search icon" style={{  
          background: "0 0!important",
          'box-sizing': "inherit",
          fontFamily:"Icons",
          opacity: "1",
          margin: "0!important",
          'vertical-align': "top",
          'backface-visibility': "hidden",
          speak:" none",
          width: "1.18em",
          height: "1em",    
          display: "inline-block",
          margin: "0 .25rem 0 0",
          'font-style': "normal",
          fontWeight: "400",
          'text-decoration': "inherit",
          'text-align': "center",
          'fontSmoothing': "antialiased",
           // -moz-osx-font-smoothing: grayscale;
          '-webkit-font-smoothing': "antialiased",
          // -webkit-backface-visibility: hidden;
          'backface-visibility': "hidden"}} ></i></button>    
      </form>

    <Fragment>
      <div id="setMapData" style={{height:"400px", width:"100%"}}> 
      </div>
    </Fragment>
  </Fragment>
        )
  }
}
 GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})("setMapData")

 GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})("setMapData")
