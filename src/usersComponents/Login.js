import React, { Component, Fragment } from 'react'

export default class SignupForm extends Component {

  state ={
    email:'',
    password: ''
  }

  //Handle Change
 handleLoginChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
     })
  }

 //Login data
 handleSubmit =(e)=>{
  e.preventDefault()
  console.log("LOGIN EMAIL " + this.state.email  +
  " PASSWORD "  + this.state.password)
}

  render() {
    return (
      <div className="app-card">
      <form>
          <div className="app-card-header">
            <div className="app-card-content-inner">
               <div className="upload-profile-photo-main">
                  <label>
                       LOGIN
                      <span className="upload-photo-description">
                         LOGIN
                      </span>
                  </label>
                </div>
             </div>
          </div>  
          <div className="first-and-lastname">
              <div  className="app-form-item">
              {/* <div class="ui form">*/}
                  <label htmlFor="to">email</label>
                  <input type="text" placeholder="Email" id="to"/>
              </div> 
              <div className="app-form-item">    
                  <label>password</label>
                  <input htmlFor="to" type="password" placeholder="Password" id="to"/>
              </div>
          </div>
          
           <div className="app-form-actions">
              <button type="submit" className="app-button primary">Submit</button>
           </div>
         
          <div className="app-card-content">
          
            <div className="app-card-content-inner">
           
            </div>
          </div>
      </form>
    </div>

    )
  }
}