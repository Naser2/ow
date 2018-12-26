import React, { Component } from 'react'
import Header from '../components/Layout/Header';


export default class Home extends Component {
  render() {
    return (
      <div>
       
        
          <div className={'app-container'}>
             <Header />
            <div className={'app-content'}>          
              <div className="app-card">
              <div className="app-card-header"></div>
              </div>
            </div>

          </div>
        

      </div>
    )
  }
}
