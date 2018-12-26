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
                          <input type="file" multiple={false} name="upload-profile_photo-input" id="upload-profile_photo-input"/>
                            <span className="upload-photo-icon"></span>
                            <span className="upload-photo-description">
                              Select or Drag your profile photo here
                            </span>
                        </label>
                      </div>
                   </div>
                </div>  

                <div className="app-form-item">
                    <label htmlFor="to">First name</label>
                    <input type="text" placeholder="First name" id="to"/>
                </div> 
                <div className="app-form-item">    
                    <label>Last name</label>
                    <input htmlFor="to" type="text" placeholder="Last name" id="to"/>
                </div>
                <div className="app-form-item">
                    <label>Email</label>
                    <input htmlFor="to" type="text" name="name" placeholder="Email" id="email"/>
                </div>

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
               
               
                <div className="app-card-content">
                   Content Header 
                  <div className="app-card-content-inner">
                     Content Inner
                  </div>
                </div>
            </form>
          </div>
    )
  }
}
