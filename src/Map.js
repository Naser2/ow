import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


 class Map extends Component {


  componentDidMount() {
    this.loadMap();
    console.log(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
      console.log(this.loadMap())
    }
 
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig)
    }
  }
  render(){
    // console.log(this.props)
    // console.log(this.loadMap(), this.map, this.google, this.node)
    return (
      <div ref='map'>
        Loading map...
        {this.map}
      </div>
    )
  }
}

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
}
Map.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
}


export default Map;