import React, { Component } from 'react'
import Search from '../Search'
import Match from '../Match'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Search />
    
        <Match />
      </div>
    )
  }
}
