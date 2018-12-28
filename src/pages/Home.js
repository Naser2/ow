import React, { Component } from 'react'
import Header from '../components/Layout/Header';
import HomeForm from './HomeForm';


export default class Home extends Component {
  render() {
    return (
      <div className="main-pages-div">
      Temp Main Begin
       <div className={'app-container'} >
          Container Begin 
             <Header />
            <div className={'app-content'}>    
              
              <HomeForm />
             
          </div>
          End Container    
       </div>
      Temp Main End 
    </div>
 
    )
  }
}
