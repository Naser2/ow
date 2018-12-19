import React, { Component } from 'react'
import Search from '../Search'
import Match from '../Match'
import {PlacesWithStandaloneSearchBox} from './StandAloneSearch';
import MapWithASearchBox from './MapWithASearchBox';

export default class Landing extends Component {
  render() {
    return ( 
      <div>
       <React.Fragment>
        <nav class="navbar navbar-transparent navbar-top" role="navigation">
            {/* <div class="container"> */}
               {/* Brand and toggle get grouped for better mobile display */}
            
            {/* </div>  */}
             {/* container */} 
         </nav>
        </React.Fragment>
     
        <React.Fragment>
        <div class="wrapper">

            <div class="parallax filter-gradient blue" data-color="blue">
                <div class="parallax-background">
                    <img class="parallax-background-image" src=""/>
                </div>
                <div class= "container">
                    <div class="row">
                        <div class="col-md-5 hidden-xs">
                            <div class="parallax-image">
                                <img class="phone" src="assets/img/template/iphone3.png" style={{marginTop: "20px",
                                 marginRight:"60px"}}/>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-1">
                           
                            <div class="description">
                            
                                <h2>Welcome To <img src="assets/img/ow_logo_white-1.png" alt="" style={{ overflow: "hidden", width: "130px"}} /></h2>
                                 <h4> Search for a place</h4>
                            
                                <br/>
                                <h5>Be amazed by the great places you can visit on earth! - OW</h5>
                            </div>
                            
                            <div class="buttons">
                            
                                <button class="btn btn-fill btn-neutral">
                                <i class="fa fa-apple"></i> Appstore
                                </button>
                                <button class="btn btn-simple btn-neutral">
                                <i class="fa fa-android"></i>
                                </button>
                                <button class="btn btn-simple btn-neutral">
                                <i class="fa fa-windows"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>

            <React.Fragment>
            <div class="section section-gray section-clients">
           
                <div className="container text-center">
                    <h4 class="header-text">GoMeet Friends and family at any places</h4>
                    <p>
                    Be amazed by the best the be great places you can visit on earth!<br/>
                    </p>
                   {/* Can add logos here if necessary   */}
                </div>
            </div>
            </React.Fragment>
            </div>




    )
  }
}
