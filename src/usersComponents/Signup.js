import React, { Component } from 'react'

export default class SignupForm extends Component {

  state ={
    first_name: '',
    last_name:'',
    email:'',
    phone:'',
    password: ''
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
  console.log("submitting Name " + this.state.first_name + "  LAST " + this.state.last_name +
  " Phone  " + this.state.phone  +  " PW   " + this.state.password)
}

  render() {
    return (
        // <div className="signupForm-heading" style={{textAlign:"center", margin: "0 auto"}}>
        //    Create an Account 
        <div className="app-card" style={{
          margin: "0 auto",
          width:"600px",
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
              }}>
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
                          <input type="text" placeholder="First name" id="to"/>
                      </div> 
                      <div className="app-form-item">    
                          <label>Last name</label>
                          <input htmlFor="to" type="text" placeholder="Last name" id="to"/>
                      </div>
                  </div>
                  <div className="app-form-item">
                      <label>Email</label>
                      <input htmlFor="to" type="text" name="Email" placeholder="Email" id="email"/>
                  </div> 
                  <div className="app-form-item">
                      <label>Phone</label>
                      <input htmlFor="to" type="text" name="Phone" placeholder="Phone" id="phone"/>
                  </div> 
                  <div className="app-form-item">
                      <label>Password</label>
                      <input htmlFor="to" type="password" name="password" placeholder="Password" id="password"/>
                  </div> 
                  <div className="app-form-item">
                      <label>Password Confirmation</label>
                      <input htmlFor="to" type="password" name="password" placeholder="Password" id="password"/>
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

      // </div>
    //   <div class="container" style={{
    //     position: "relative", 
    //     padding: "20px 20x",   
    //     background: "#1273de",
    //     'boxSizing': "border-box",
    //     'background-color': "white",
    //     'boxShadow': "0px 0px 15px black",
    //     'borderRadius': "5px"
      
    //   }}>
    //   <div className="row"  >
    //       <div className="col-sm-4"></div>
    //         <a className="btn big-register" style={{margin: "60px 80x"}} >Signup</a>
    //      </div>

     
    // <div className="form AddressBox " style={{ padding: "20px 200px",}}>
    //     <form onSubmit={this.handleSubmit }>
    //     <input id="first_name"  style={{overflow: "auto",  margin: "12px " }} className="form-control" type="text" placeholder="First Name" name="first_name" value={this.state.first_name}
    //      onChange={ (e)=> this.handleFormChange(e) }></input>

    //     <input id="last_name" style={{overflow: "auto", margin: "12px",'border-collapse': "collapse",
    //   }} className="form-control" type="last_name" placeholder="Last Name" name="last_name"
    //     value={this.state.last_name}
    //     onChange={ (e)=> this.handleFormChange(e) }></input>

    //     <input id="phone" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="phone" placeholder="Phone" name="phone"
    //     value={this.state.phone}
    //     onChange={ (e)=> this.handleFormChange(e) }></input>
        
    //     <input id="password" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="password" placeholder="Password" name="password"
    //     value={this.state.password}
    //     onChange={ (e)=> this.handleFormChange(e) }></input>

    //     <input class="btn btn-default btn-login" style={{
    //       'margin-right': "auto",
    //       'margin-left': "auto",
    //       display: "block",
    //       padding: "8px 16px",
    //       'font-size':" 16px",
    //       color: "#ffff",
    //       'backgroundColor': "#fccb00",
    //       'border': "0",
    //       'borderRadius': "2px",
    //       cursor: "pointer",
    //       transition: "background-color. 15s ease-in",
    //       'marginTop': "16px"}}
    //       type="submit" value="Sign"></input>
    //      </form>
    //  </div>
    //</div>

    )
  }
}