
import React, { Component } from 'react'
// import Map from './Map'
// import GoogleApiComponent from './GoogleApiComponent'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

 export class Container extends Component {
  render() {
    console.log(this.props)
    console.log(process.env)
    const mapBasciStyle = {
      width: '100vw',
      height: '100vh'
    }
    if (!this.props.loaded){
      return <div>Loading...</div>
    }
    return (
      <Map style={mapBasciStyle} google={this.props.google} zoom={14}>
 
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
          {/* <div> */}
            {/* Selected to show here!! */}
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
          {/* </div> */}
      {/* </InfoWindow> */}
    </Map>
    )
  }
}

export default GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})(Container)

