import React, { Component } from 'react'
import axios from 'axios'

export default class SignupForm extends Component {

  state ={
    first_name: '',
    last_name:'',
    email:'',
    phone_number:'',
    password: '',
    password_confirmation:''
  }

//Handle Input Change
  handleFormChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
    })
}

//Submits New User Data
handleSubmit =(e)=>{
  e.preventDefault()
  // console.log("submitting Name " + this.state.first_name + "  LAST " + this.state.last_name +
  // " Phone  " + this.state.phone  +  " PW   " + this.state.password)
  axios.post("http://localhost:3001/users", {user: this.state})
  .then(res => console.log(res))
  .finally(this.props.history.push("/login"))
}

  render() {
    return (

        <div className="app-card" style={{
          // margin: "0 auto",
          // width:"600px",
          height: "100%",
          // Fb width: "396px" - // padding: "22px 108px 26px",
          // margin: "auto",
        // 'padding-bottom': "30px",
          backgroundColor: "#fff",
          border: "1px solid #dddfe2",
          borderRadius: "3px",
        }}>
              <form stle={{
                margin: "90px 120px 50px 120px", //T(0)R(15)B(15)L(15)
                padding:" 90 90 90 80 ",
                textAlign: "center",
                clear:"left",
              }} 
              onSubmit={this.handleSubmit}
            >
                  <div className="app-card-header">
                    <div className="app-card-content-inner">
                      <div className="upload-profile-photo-main">
                          <label>
                              <span className="upload-photo-description">
                             
                              </span>
                          </label>
                        </div>
                    </div>
                  </div>  
                  <div className="first-and-lastname">
                      <div  className="app-form-item">

                          <label htmlFor="to">First name</label>
                          <input type="text" placeholder="First name" name="first_name" value={this.state.first_name} onChange={this.handleFormChange}  />
                      </div> 
                      <div className="app-form-item">    
                          <label>Last name</label>
                          <input htmlFor="to" type="text" placeholder="Last name" name="last_name" value={this.state.last_name} onChange={this.handleFormChange}/>
                      </div>
                  </div>
                  <div className="app-form-item">
                      <label>Email</label>
                      <input htmlFor="to" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleFormChange}/>
                  </div> 
                  <div className="app-form-item">
                      <label>Phone</label>
                      <input htmlFor="to" type="text" name="phone_number" placeholder="Phone" value={this.state.phone_number} onChange={this.handleFormChange}/>
                  </div> 
                  <div className="app-form-item">
                      <label>Password</label>
                      <input htmlFor="to" type="password" name="password" placeholder="Password" id="password" value={this.state.password} onChange={this.handleFormChange}/>
                  </div> 
                  <div className="app-form-item">
                      <label>Password Confirmation</label>
                      <input htmlFor="to" type="password" name="password_confirmation" placeholder="confirm Password" value={this.state.password_confirmation} onChange={this.handleFormChange}/>
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