import React, { Component, Fragment } from 'react'
import axios  from 'axios'

export default class LogIn extends Component {

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
  // console.log("LOGIN EMAIL " + this.state.email  +
  // " PASSWORD "  + this.state.password)
  axios.post("http://localhost:3001/user_token", {auth: this.state})
  .then(res => {
    localStorage.setItem("token",res.data.jwt);
  }).catch(err => {
    console.log('some err', err);
  })
  .finally(() => {
    this.props.history.push("/profile")
  })
  
}

  render() {
    return (
      // <div className="app-login-form">
       <div className="login">
        <div className="app-login-form-inner">
      <form  onSubmit={this.handleSubmit}>
      
      <h2 className="form-tile"  style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              '-webkit-font-smoothing': "subpixel-antialiased",
              'font-size': "18px",
              'line-height': "22px",
               margin: "30px 120px 30px 120px", //T(0)R(15)B(15)L(15
               color: "rgb(29,33,40)",
              }}>Log Into O-W</h2>

              <div  className="app-form-item">
             
                  <label htmlFor="to">email</label>
                  
                  <input type="text" placeholder="Email" id="to" style={{
                    'font-size': "14px",
                    'font-family': "Helvetica, Arial,   sans-serif",
                    // padding: "5px 8px",
                     width: "284px",
                     background: "#FFFFFF repeat-x",
                     border: "1 /px solid #dddfe2",
                     color: "#1d2129",
                    'line-height': "16px",
                     padding: "0 8px",
                     'vertical-align': "middle",
                     borderRadius: 0,
                    'font-size': "14px",
                     width: " 302px",   
                  }}
                  name="email" value={this.state.name}
                  onChange={this.handleLoginChange}
                  />
              </div> 
              <div className="app-form-item">    
                  {/* <label>password</label> */}
                  <input htmlFor="to" type="password" placeholder="Password" id="to"  
                        style={{
                        'font-size': "14px",
                          width: " 302px",
                          borderRadius: 0
                        }}
                        name="password" value={this.state.password}
                       onChange={this.handleLoginChange}

                  />
              </div>
            
           <div className="app-form-actions">
              <button type="submit" className="app-button login-prime">
              Log In
              </button>
           </div>
         
          <div className="app-form-description">
           <div>Don't have an account ?</div> 
           {/* ----------------------- Or ------------------------ */}
            <div className="app-form-actions">
           <button type="submit" className="app-button create-account"
              > Create an account </button></div>
           
            {/* </div> */}
          </div>
      </form>
      </div>
    </div>

    )
  }
}