import React, { Component, Fragment } from 'react'

export default class HomeForm extends Component {
  render() {
    return (

        <div className="app-card">
            <form>
                <div className="app-card-header">
                  <div className="app-card-content-inner">
                     <div className="upload-profile-photo-main">
                        <label>
                          <input type="file" multiple={true} name="upload-profile_photo-input" id="upload-profile_photo-input"/>
                            <span className="upload-photo-icon"></span>
                            <span className="upload-photo-description">
                              Select or Drag your profile photo here
                            </span>
                        </label>
                      </div>
                   </div>
                </div>  

                <div  className="app-form-item">
                {/* <div class="ui form">*/}
                    <label htmlFor="to">First name</label>
                    <input type="text" placeholder="First name" id="to"/>
                </div> 
                <div className="app-form-item">    
                    <label>Last name</label>
                    <input htmlFor="to" type="text" placeholder="Last name" id="to"/>
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
        {/* <form class="ui form">
           <div class="equal width fields">

           <div class="field"><label for="form-input-control-first-name">First name</label>
           <div class="ui input"><input type="text" id="form-input-control-first-name" placeholder="First name"/>
                </div>
           </div>
           <div class="field"><label for="form-input-control-last-name">Last name</label> </div>

           <div class="ui input"><input type="text"   id="form-input-control-last-name" placeholder="Last name"/>
            </div>

           </div>
           </form>
           
          
           
          
         <Fragment>
        <div className="app-form-item">
            <div class="field">
            <div class="ui checkbox">
            <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
            <label>I agree to the Terms and Conditions</label>
            </div>
            </div>
            <button type="submit" class="ui button">Submit</button>

            <div class="ui grid"><div class="eight wide column"><button class="ui primary button">A button that can be focused</button></div><div class="eight wide column"><button class="ui button">Set focused</button></div>
            </div>
        </div> 
        </Fragment>             
                */}
               
                <div className="app-card-content">
                
                  <div className="app-card-content-inner">
                 
                  </div>
                </div>
            </form>
          </div>
    )
  }
}
