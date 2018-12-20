import React, { Component, Fragment } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class GitMapData extends Component {



 



  conponentDidMount(){
  
  }

  render() {
  
  

    return (

      
          <Fragment>
            <h1>Google Map from GitMap Data</h1>
      
          <Fragment>
           <div id="setMapData" style={{height:"400px", width:"100%"}}> 
          </div>
          </Fragment>
      
          <Fragment>
          <script async  defer
               src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap">
          </script>
          </Fragment>

            


          </Fragment>
        )
  }
}
let fakeKey
 GoogleApiWrapper ({
  apiKey: fakeKey
  // process.env.REACT_APP_OW_JS_API_KEY
})("setMapData")
