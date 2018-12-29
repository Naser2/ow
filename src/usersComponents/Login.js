import React, { Component, Fragment } from 'react'
import axios  from 'axios'
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
  // console.log("LOGIN EMAIL " + this.state.email  +
  // " PASSWORD "  + this.state.password)
  axios.post("http://localhost:3001/user_token", {auth: this.state})
  .then(res => localStorage.setItem("token",res.data.jwt))
  .finally(this.props.history.push("/profile"))
  
}

  render() {
    return (
      <div className="app-card" style={{margin: "0 auto",
        width:"600px",
        // Fb width: "396px" - // padding: "22px 108px 26px",
        // margin: "auto",
        backgroundColor: "#fff",
        border: "1px solid #dddfe2",
        borderRadius: "3px",
        }}>
      <form  onSubmit={this.handleSubmit}
      style={{
        margin: "25px 120px 50px 120px", //T(0)R(15)B(15)L(15)
        padding:" 0",
        textAlign: "center",
        clear:"left",

      
      }}>
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
          
              <div  className="app-form-item">
              {/* <div class="ui form">*/}
                  {/* <label htmlFor="to">email</label> */}
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
            
           <div className="app-form-actions"  
                                    style={{
                                      'font-size': "14px",
                                       width: "284px",
                                      margin:" 10px 28px 50px ",
                                      //T(0)R(15)B(15)L(15
                                    }}
           >
              <button type="submit" className="app-button primary"
              style={{
                width: " 302px",
                borderRadius: 0
              }}

              >Submit</button>
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