import React, { Component } from 'react'
import Header from '../components/Layout/Header';


export default class Home extends Component {
  render() {
    return (
      <div className="main-pages-div">
      Temp Main Begin
       <div className={'app-container'}>
          Container Begin 
             <Header />
            <div className={'app-content'}>    
              Begin App Content
              <div className="app-card">
                Card Begin
                <div className="app-card-header">
                   Header
                   <div className="app-card-content-inner">
                      Header Inner
                    </div>
                </div>
                <div className="app-card-content">
                   Content Header 
                  <div className="app-card-content-inner">
                     Inner
                  </div>
                </div>
                Card End 
              </div>
              End App Content
          </div>
          End App Container    
       </div>
      Temp Main End 
    </div>
 
    )
  }
}
