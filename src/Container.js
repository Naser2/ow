
import React, { Component } from 'react'
import Map from './Map'

export default class Container extends Component {
  render() {
    console.log(this.props)
    const mapBasciStyle = {
      width: '100vw',
      height: '100vh'
    }
    if (!this.props.loaded){
      return <div>Loading...</div>
    }
    return (
      <div style={mapBasciStyle}>
         <Map google={this.props.google} />
      </div>
    )
  }
}

const GoogleApiComponent = () => ({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(Container)

export {GoogleApiComponent}