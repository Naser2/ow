import React, { Component } from 'react'
// import Map from './Map'
// import GoogleApiComponent from './GoogleApiComponent'
import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';
 import {PlacesWithStandaloneSearchBox} from './usersComponents/StandAloneSearch';
import PanelHeader from './components/PanelHeader';
// import { CardHeader } from 'semantic-ui-react';
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
 

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
      width: '40vw',
      height: '50vh'
    }
    if (!this.props.loaded){
      return <div>Loading...</div>
    }
    return (
      <div>

        <PanelHeader size="sm" />
         <div className="content">Hello 
         <Row>
          <Col xs={6}>
          <Card>
            <CardHeader style={{backgroundColor:"#e039c2e0",  width: '42vw',
      }}>Google Maps</CardHeader>
            <CardBody style={{ width: '54vw',
      height: '51vh', padding: "0.25rem"}} >
            <Map 
            
              center={{
                lat: latitude,
                lng: longitude
              }}
            style={mapBasicStyle}
            google={this.props.google}
            zoom={16}
            > 
            
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
                  </CardBody>
              </Card>
            </Col>
          </Row>
            
        </div>
    </div>
    )
  }
}

export default GoogleApiWrapper ({
  apiKey: 
})(Container)

