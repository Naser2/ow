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
        <nav className="navbar navbar-transparent navbar-top" role="navigation">
            {/* <div className="container"> */}
               {/* Brand and toggle get grouped for better mobile display */}
            
            {/* </div>  */}
             {/* container */} 
         </nav>
        </React.Fragment>
     
        <React.Fragment>
        <div className="wrapper">

            <div className="parallax filter-gradient blue" data-color="blue">
                <div className="parallax-background">
                    <img className="parallax-background-image" src=""/>
                </div>
                <div className= "container">
                    <div className="row">
                        <div className="col-md-5 hidden-xs">
                            <div className="parallax-image">
                                <img className="phone" src="assets/img/template/iphone3.png"
                                 style={{
                                 marginTop: "18px",
                                 marginRight:"70px"
                                 }}
                                 />
                            </div>
                        </div>
                       
                        <div className="col-md-6 col-md-offset-1">
                           
                            <div className="description">
                            {/* <MapWithASearchBox /> */}
                                <h2>Welcome To <img src="assets/img/logos/ow_logo_white-1.png" alt="" style={{ overflow: "hidden", width: "130px"}} /></h2>
                                 <h4> Search for a place</h4>
                            
                                <br/>
                                <h5>Be amazed by the great places you can visit on earth! - OW</h5>
                            </div>
                            
                            <div className="buttons">
                            
                                <button className="btn btn-fill btn-neutral">
                                <i className="fa fa-apple"></i> Appstore
                                </button>
                                <button className="btn btn-simple btn-neutral">
                                <i className="fa fa-android"></i>
                                </button>
                                <button className="btn btn-simple btn-neutral">
                                <i className="fa fa-windows"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>

            <React.Fragment>
            <div className="section section-gray section-clients">
           
                <div className="container text-center">
                    <h4 className="header-text">GoMeet Friends and family at any places</h4>
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
