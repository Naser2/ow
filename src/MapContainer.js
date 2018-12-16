import React, { Component } from 'react'

export default class MapContainer extends Component {
  render() {
    if (!this.props.loaded){
      return <div>Loading...</div>
    }
    return (
      <div>
        Here goes Google map 
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(Container)