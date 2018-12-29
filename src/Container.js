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
      width: '28vw',
      height: '45vh',
      // 'box-sizing': "border-box",
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
          <CardHeader style={{backgroundColor:"blue",  width: '29vw', height: '5vh'}}>Google Maps</CardHeader>
          <Card style={{ width: "32em", height: '47vh' , padding: "0.25rem"  }}>
          
            {/* , padding: "0.25rem" */}
           
            <CardBody style={{ width: "90vh", height: '51vh', 'box-sizing': "border-box"}} >
            <Map 
            
              center={{
                lat: latitude,
                lng: longitude
              }}
            style={mapBasicStyle}
            google={this.props.google}
            zoom={18}
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
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})(Container)




