import React, { Component } from 'react'
import Search from '../Search'
import Match from '../Match'
import {PlacesWithStandaloneSearchBox} from './StandAloneSearch';
import MapWithASearchBox from './MapWithASearchBox';
export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <MapWithASearchBox />
        {/* <PlacesWithStandaloneSearchBox /> */}
        <Match />
      </div>
    )
  }
}
