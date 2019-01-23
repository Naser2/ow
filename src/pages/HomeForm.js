import React, { Component} from 'react'
import {FirstName, PasswordConfirmation, LastName, Email, Phone, Password} from './Popup.js';
import {Button} from 'semantic-ui-react'

export default class HomeForm extends Component {
    state={
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password:''
    };

    handleFirstName=(e)=>{
        // console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        }, ()=> console.log("FIRST NAME IN STATE: ", this.state.first_name))
    }
    handleLastName=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        }, ()=> console.log("LAST NAME IN STATE: ", this.state.last_name))
    }
    handleEmail=(e)=>{
        // console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        }, ()=> console.log("EMAIL IN STATE: ", this.state.email))
    }

    handlePhone=(e)=>{
        // console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        }, ()=> console.log("PHONE IN STATE: ", this.state.phone_number))
    }
    handlePassword=(e)=>{
        console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        }, ()=> console.log("PASSWORD IN STATE: ", this.state.password))
    }
    setPassWordConfButton= () =>{
    const button= <Button color='orange' content='Confirm Password' />
    this.setState({button},()=>{console.log("Changed Button")})
    }
    handlePasswordConfirmation = (e) => {
        console.log("CONFIRM PASSWORD: ", e.target.value)
         const button = 
        // <div class="eight wide column"><button class="ui button">Open controlled popup</button></div>;
        <Button color='green' content='Password match OK' />
         ; 
        this.setState({button,
            [e.target.name]:e.target.value
        })
}
componentDidMount(){
    this.setPassWordConfButton() 
}

  render() {
    
    console.log('Hello Sign UP Form ')
    return (
    
        <div className="app-card"
         style={{ }}
        >
            <form class="ui form"><div class="field">

             {/* <FirstName /> */}
            </div>
       <div class="field">

        <div class="ui pointing below label" 
        style={{display:"hidden"}}>
        Please enter a value</div>
        {/* <button class="ui icon button">Click me or Hover me</button>
        <button class="ui icon button">Click me or Hover me</button> */}
        
        <input type="text" placeholder="Last Name"/>
        </div>
        <div class="inline field"><input type="text" placeholder="Username"/><div class="ui left pointing label"
         style={{display:"hidden"}}>
         That name is taken!</div
         
         ></div>

        
        <div class="ui divider"></div>
        
        {/* <div class="inline field"><div class="ui right pointing label">Your password must be 6 characters or more</div><input type="password" placeholder="Password"/></div> */}
        
        </form>

            <form>
                <div className="app-card-header">
                  <div className="app-card-content-inner">
                     <div className="upload-profile-photo-main">
                        <label>
                          {/* <input type="file" multiple={true} name="upload-profile_photo-input" id="upload-profile_photo-input"/> */}
                            {/* <span className="upload-photo-icon"></span> */}
                            <span className="upload-photo-description" 
                            style={{
                                width: "352px",
                                'max-width': "352px",
                                padding: "16px",
                                margin: "0 0 16px -16px",
                                "-webkit-box-sizing": "border-box",
                                "box-sizing": "border-box",
                                background:" #f7f8fa",
                                'font-size': "1.8rem",
                                'line-height': "1.33333",
                                'font-weight': "400",
                                color: "rgba(0,0,0,0.9)",
                                'text-align':" center",
                            }}>
                             Join and get and address - It is free.
                            </span>
                        </label>
                      </div>
                   </div>
                </div>  

                <div className="first-and-lastname">

                    <div  className="app-form-item">
                        <label htmlFor="first-name">First name</label>
                        <FirstName id="first_name"
                            name="first_name"
                            value={this.state.first_name}
                            handleFirstName={this.handleFirstName}
                         />
                    </div> 

                    <div className="app-form-item">   
                      <label htmlFor="last_name">Last name</label>
                        <LastName id="last_name"
                          name="last_name"
                          value={this.state.last_name}
                          handleLastName={this.handleLastName}
                          />
                    </div>
                </div>
                <div className="app-form-item">
                    <label>Email</label>
                    <Email name="email"
                    email={this.state.email}
                    handleEmail={this.handleEmail}
                    />
                </div> 
                <div className="app-form-item">
                    <label>Phone</label>
                    <Phone name="phone_number"
                    value={this.state.phone_number}
                    handlePhone={this.handlePhone}
                    />
                </div> 
                <div className="app-form-item">
                    <label>Password</label>
                   <Password name="password"
                   password={this.state.password}
                   handlePassword={this.handlePassword}
                   />
                </div> 
                <div className="app-form-item">
                    <label>Password Confirmation</label>
                    <PasswordConfirmation type="password" 
                    passwordConfirmation={this.state.passwordConfirmation}
                    name="password" placeholder="Password" id="password" 
                    
                    handlePasswordConfirmation={this.handlePasswordConfirmation}
                    HideConfirmationMsg={this.state.confirmationMsgContent }
                   
                    button={this.state.button
                      }
                   
                     
                    />
                   
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
