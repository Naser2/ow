import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className={'app-header'}>
        in HEADER: Here is left side 
        <div className={'app-site-info'}>
           <h1>SHARE</h1> 
           <div className="site-title"> Share With Your Friends</div>

            <div className="site-slogan"> Get an adress, Fast, Free</div>
        </div>
      </div>
    )
  }
}
