import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className={'app-header'} >
        
        <div className={'app-site-info'}>
         
           <h1>AN ADDRESS</h1> 
           
           <div className="site-title"> 
          <h2>Get an address you can share for free
          <br></br>
          Travel to places guided with a map. </h2>
          <br></br>
           </div>

            <div className="site-slogan" style={{
              // color:'rgb(176, 179, 206)',
              // //'rgb(254, 201, 62)',
              // 'font-size': "30px",
              // 'font-family':  'Open Sans, sans-serif'
              }}>
             Get A Numeric Adress, Fast, Free
            </div>

        </div>
      </div>
    )
  }
}
