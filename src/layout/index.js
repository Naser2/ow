import React, { Component } from 'react'
import Header from '../components/Layout/Header'


 class Layout extends Component {
   constructor(props){
     super(props)
   }
  render() {
    return (
      <div className={'app-layout'}>
        <div className={'app-container'}>
              <Header />
           
           <div className={'app-content'}>
            Here is the App content
           </div>
         </div>
      </div>
    )
  }
}
export default  Layout; 