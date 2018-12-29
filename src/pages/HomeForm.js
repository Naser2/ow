import React, { Component, Fragment } from 'react'

export default class HomeForm extends Component {
  render() {
    return (

        <div className="app-card" >

 


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
                    {/* <div class="ui form">*/}
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
    )
  }
}
