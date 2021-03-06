import React, { Component } from 'react';
import Search from '../../Search';
import Match from '../../Match';
import { PlacesWithStandaloneSearchBox } from '../StandAloneSearch';
import MapWithASearchBox from '../MapWithASearchBox';
import './landing-page.css';
import VideoComponent from './VideoComponent';
import ModalExampleDimmer from '../../pages/ModalSearch';
import ModalSearch from '../../pages/ModalSearch';
// import './landing-page.js'

//             {/* <div className="container"> */}

export default class Landing extends Component {
  render() {
    return (
      <body
        class="landing-page landing-page1"
        style={{
          margin: '0',
          padding: '0'
        }}
      >
        {/* <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="#">
                    <i class="fa fa-facebook-square"></i>
                    Like
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i class="fa fa-twitter"></i>
                    Tweet
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i class="fa fa-pinterest"></i>
                    Pin
                    </a>
                </li>
            </ul>*/}

        <div class="wrapper">
          <div class="parallax filter-gradient blue" data-color="blue">
            <div class="parallax-background">
              <img
                class="parallax-background-image"
                src="assets/img/template/Home_2x-3rd.jpg"
                alt="#"
              />
            </div>
            <div class="container">
              {/* <ModalSearch /> */}
              <div class="row">
                <div class="col-md-5 hidden-xs">
                  <div class="parallax-image">
                    <img
                      class="phone"
                      src="assets/img/template/iphone3.png"
                      style={{ 'margin-top': '20px' }}
                      alt="#"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-md-offset-1">
                  <div class="description">
                    <h2>
                      Welcome To{' '}
                      <img
                        src="assets/img/logos/ow_logo_white-1.png"
                        alt=""
                        style={{ overflow: 'hidden', width: '130px' }}
                      />
                    </h2>
                    <br />
                    <h5>
                      Be amazed by the great places you can visit on earth! ,
                      travel, visit friends, family, see beautiful places- Take
                      advantage of this great app features!
                    </h5>
                  </div>
                  <div class="buttons">
                    <button class="btn btn-fill btn-neutral">
                      <i class="fa fa-apple" /> Appstore
                    </button>
                    <button class="btn btn-simple btn-neutral">
                      <i class="fa fa-android" />
                    </button>
                    <button class="btn btn-simple btn-neutral">
                      <i class="fa fa-windows" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section section-gray section-clients">
            <div class="container text-center">
              <h4 class="header-text">Friends in high places</h4>
              <p>
                Build and address book and get to places in confidenceassited by
                One Way
                <br />
              </p>
              <div class="logos">
                <ul class="list-unstyled">
                  <li>
                    <img src="assets/img/logos/adobe.png" alt="#" />
                  </li>
                  <li>
                    <img src="assets/img/logos/zendesk.png" alt="#" />
                  </li>
                  <li>
                    <img src="assets/img/logos/ebay.png" alt="#" />
                  </li>
                  <li>
                    <img src="assets/img/logos/evernote.png" alt="#" />
                  </li>
                  <li>
                    <img src="assets/img/logos/airbnb.png" alt="#" />
                  </li>
                  <li>
                    <img src="assets/img/logos/zappos.png" alt="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="section section-presentation"
            style={{
              padding: '0',
              // position: relative;
              backgroundColor: 'rgb(25,150,240)',
              color: 'white'
            }}
          >
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="description">
                    <h4 class="header-text">It's beautiful</h4>
                    <p>And Easy to use </p>
                    <p>Try to create and addresss....</p>
                  </div>
                </div>
                <div
                  class="col-md-5 col-md-offset-1 hidden-xs"
                  style={{
                    'margin-left': '31.333333%',
                    height: '600px'
                  }}
                >
                  <img src="assets/img/template/mac.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="section section-demo"
            style={{
              'margin-top': '50px'

              // 'padding': '60px 0',
              // 'position': 'relative',
            }}
          >
            <div class="row">
              <div class="col-md-6">
                <div
                  class="carousel-inner"
                  style={{
                    //Video
                    'margin-top': '20px',
                    width: '640px',
                    'margin-left': '120px',
                    'box-shadow': '8px 2px 10px #999'
                  }}
                >
                  <div class="item">
                    <VideoComponent />
                  </div>
                </div>
              </div>
              <div
                class="col-md-5 col-md-offset-1"
                sytle={
                  {
                    // 'margin-top': " 400px",
                    // 'margin-Left': "20em",
                    // paddingLeft: '1.66666667%',
                    //  width: '10.66666667%',
                    // float: 'right',
                    // 'margin-left':'8.33333333%',  'display':'inline-block',
                    //'white-space':'nowrap',
                    // ' margin-top': '30px',
                    // 'line-height': '28px',
                    // 'font-size': '18px',
                    // 'font-weight': '200',
                  }
                }
              >
                <h4
                  class="header-text"
                  style={{
                    //Header
                    'margin-top': '20px',
                    paddingRight: '210px', //TRBL
                    paddingLeft: '40px',
                    'font-size': '2.4rem',
                    'font-weight': '300'
                  }}
                >
                  Watch Our Video
                </h4>
                <p
                  style={{
                    'margin-top': '12px', // Paragraph
                    paddingRight: '210px', //TRBL
                    paddingLeft: '40px',
                    display: 'inline-block',
                    // 'white-space': 'nowrap',
                    'line-height': '28px',
                    'font-size': '18px',
                    'font-weight': '200'
                  }}
                >
                  OneWay is an app that allows you create numeric addresses for
                  your residences, <br />office, or places of commerce.Once
                  created, an address it is geo-localizable for delivery purpose
                  and you can share it to visiting friends. OneWay makes
                  traveling easy with integrated geolocation support. <br />
                  <br /> - "To Each One An Address".
                </p>
                {/* <a href="http://www.1way.io" id="Demo3" class="btn btn-fill btn-info" data-button="info" 
                                    style={{//BUTTON
                                        'margin-top': "0px",
                                         marginLeft: '39px',//TRBL
                                        'margin-bottom': "10px",
                                        'background-color': '#005abe',
                                        
                                       
                                    }}>Get Free Demo2</a> */}
                <a
                  href="http://www.1way.io"
                  id="Demo3"
                  class="btn btn-fill btn-info"
                  data-button="info"
                  style={{
                    //BUTTON
                    'margin-top': '0px',
                    marginLeft: '39px', //TRBL
                    'margin-bottom': '10px'
                  }}
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
          <div class="section section-features">
            <div class="container">
              <h4 class="header-text text-center">
                Features and Next Features
              </h4>
              <div class="row">
                <div class="col-md-4">
                  <div class="card card-blue">
                    <div class="icon">{/* <i class="pe-7s-note2"></i> */}</div>

                    <div class="text">
                      <h4>Get Directions On The Road</h4>
                      <p>
                        All trips in sync with your Google calendar so your
                        availability is always up to date. See your schedule
                        trip at a glance from any device "Feature comming soon
                        in Mobile Inplimentation".
                      </p>
                    </div>
                    <img
                      class="phone"
                      src="assets/img/template/one-way-hands-friends.png"
                      style={{
                        // "margin-top": "20px"
                        // *  border-radius: 15px
                        height: '220px',
                        overflow: ' hidden'

                        // cursor: pointer;
                      }}
                      alt="#"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card card-blue">
                    <div class="icon">
                      <i class="pe-7s-bell" />
                    </div>
                    <h4>Smart Notifications on hands</h4>
                    <p>
                      Automatic text and email reminders for trips based on
                      trafic time make sure customers always on time for
                      upcoming appointments.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card card-blue">
                    <div class="icon">
                      <i class="pe-7s-graph1" />
                    </div>
                    <h4>Know the road better</h4>
                    <p>
                      Search a place and go, make as many detours as ou want as
                      yo're never lost with One Way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section section-testimonial">
            <div class="container">
              <h4 class="header-text text-center">Testimonials</h4>
              <div
                id="carousel-example-generic"
                class="carousel fade"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="item">
                    <div class="mask">
                      <img src="assets/img/faces/face-4.jpg" alt="#" />
                    </div>
                    <div class="carousel-testimonial-caption" />
                    <p>Yo Man Shop </p>

                    <h3>
                      "I absolutely love One Way! It's truly helped us boost our
                      business!"
                    </h3>
                  </div>
                </div>
                <div class="item active">
                  <div class="mask">
                    <img src="assets/img/faces/ceo1-18-X4 copy.jpg" />
                  </div>
                  <div class="carousel-testimonial-caption">
                    <p>
                      Kopia CEO @{' '}
                      <a href="http://www.yomanshop.com"> YOMANSHOP </a>
                    </p>

                    <h3>
                      "This is one of the most awesome apps I've ever seen! Wish
                      you luck One Way!"
                    </h3>
                  </div>
                </div>
                <div class="item">
                  <div class="mask">
                    <img src="assets/img/faces/face-2.jpg" />
                  </div>
                  <div class="carousel-testimonial-caption" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section-no-padding">
          <div class="parallax filter-gradient blue" data-color="blue">
            <div class="parallax-background">
              <img
                class="parallax-background-image"
                src="assets/img/template/street-ow-bg.jpg"
                alt="#"
              />
            </div>
            <div class="info">
              <h1>Mobile App Comming Soon!</h1>
              <p> Android and IOS Version with more functionalities .</p>
              <a href="#" class="btn btn-neutral btn-lg btn-fill">
                DOWNLOAD
              </a>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <nav class="pull-left">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
            <div class="social-area pull-right">
              <a class="btn btn-social btn-facebook btn-simple">
                <i class="fa fa-facebook-square" />
              </a>
              <a class="btn btn-social btn-twitter btn-simple">
                <i class="fa fa-twitter" />
              </a>
              <a class="btn btn-social btn-pinterest btn-simple">
                <i class="fa fa-pinterest" />
              </a>
            </div>
            <div class="copyright">
              &copy; 2018 <a href="http://www.1way.io">One Way</a>, made with
              love
            </div>
          </div>
        </footer>
        {/* </div> */}
      </body>
    );
  }
}
