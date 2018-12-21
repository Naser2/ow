import React, { Component, Fragment } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
export default class GitMapData extends Component {
 

  state ={

  }


  
  conponentDidMount(){
  
  }

  render() {

    return (
      
          <Fragment>


  
  
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    
             <h1>Search from GitMap Data</h1> 
      
          <Fragment>
           <div id="setMapData" style={{height:"400px", width:"100%"}}> 
          </div>
          </Fragment>
      
          {/* <Fragment>
          <script async  defer
               src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIAnomskNQCLLdstSLzFV__q95FAFD2Ng&callback=initMap">

          </script>
          </Fragment> */}

        


          </Fragment>
        )
  }
}
 GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})("setMapData")
