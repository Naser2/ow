import React, { Component } from 'react'
// import Map from './Map'
// import GoogleApiComponent from './GoogleApiComponent'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 import {PlacesWithStandaloneSearchBox} from './usersComponents/StandAloneSearch';
 

 export class Container extends Component {
  state={
    currentLocation: {}
  }
  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({ currentLocation: { latitude: position.coords.latitude, longitude: position.coords.longitude }})
      }
    )
  }
  render() {
    console.log(this.props)
    console.log(process.env)
    const { currentLocation } = this.state;
    let { latitude, longitude } = currentLocation
    if(!latitude && longitude) {
      latitude = 40.854885
      longitude = -88.081807
    }
    const mapBasicStyle = {
      width: '100vw',
      height: '100vh'
    }
    if (!this.props.loaded){
      return <div>Loading...</div>
    }
    return (
      <div>
      <PlacesWithStandaloneSearchBox />
      <Map
      
        center={{
          lat: latitude,
          lng: longitude
        }}
      style={mapBasicStyle}
      google={this.props.google}
      zoom={16}
      > 
      {/* <PlacesWithStandaloneSearchBox /> */}
      
      <Marker onClick={this.onMarkerClick}
          position={{ lat: latitude, lng: longitude }}
              name={'Current location'} />
         
      {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
          {/* <div> */}
            {/* Selected to show here!! */}
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
          {/* </div> */}
      {/* </InfoWindow> */}
    </Map>
    </div>
    )
  }
}


export default GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})(Container)

