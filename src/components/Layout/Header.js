import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className={'app-header'}>
        
        <div className={'app-site-info'}>
         
           <h1>TRAVEL</h1> 
           
           <div className="site-title"> 
              Share With Your Friends
           </div>

            <div className="site-slogan">
             Get an adress, Fast, Free
            </div>

        </div>
      </div>
    )
  }
}
