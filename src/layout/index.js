import React, { Component } from 'react'

 class Layout extends Component {
   constructor(props){
     super(props)
   }
  render() {
    return (
      <div className={'app-layout'}>
        <div className={'app-container'}>
           <div className={'app-header'}>
             Here is left side 
           </div>
           <div className={'app-content'}>
            Here is the App content
           </div>
         </div>
      </div>
    )
  }
}
export default  Layout; 