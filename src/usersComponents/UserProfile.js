
import React, { Component, Fragment } from 'react';

import ReactModal from 'react-responsive-modal';


import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,

  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
} from 'react-share';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
// import UserAdressSearch from './usersComponents/UserAdressSearch';
import Gravatar from 'react-gravatar'
import UserHeader from "./UserHeader.js"
import SmallMapCard from '../components/Layout/SmallMapCard';
import FullScreenMap from '../components/Layout/FullScreenMap';
import '../v4/docs/assets/css/application.css';
import '../v4/docs/assets/css/toolkit.css';




// import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "../components.1";


// import userBackground from "../public/assets/img/bg1.jpg";
// import userAvatar from "../public/assets/img/John.png";

import Cont from '../Container'
import Example from '../components/Layout/mapCard';
import someComp from '../v4/docs/assets/img/someComp';


class UserProfile extends Component {

  state = {
    user: {
      id: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      created_at: "",

    },
    addresses: [],
    aboutMe: false,
    showForm: false,
    id: '',
    savedAddresses: [],
    door_number: '',
    cardinal: '',
    street: '',
    neighborhood: '',
    lat: '',
    lng: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    openModal: false,

    modalAddress: {},
    editModalOpen: false

  };


  displayAboutMe = () => {
    // alert("Cliked on show About details")
    this.setState({
      aboutMe: !this.state.aboutMe
    })
  }

  onOpenModal = () => {
    this.setState({ editModalOpen: true });
  };

  onCloseModal = () => {
    this.hideEditForm()
    this.setState({ editModalOpen: false });
  };

  displayForm = (address) => {
    console.log(" SHow FORM ")
    this.setState({
      showForm: true,
      id: address.id,
      door_number: address.door_number,
      cardinal: address.cardinal,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      postal_code: address.postal_code,
      country: address.country,
    })
  }

  hideEditForm = () => {
    this.setState({

      id: '',
      lat: '',
      lng: '',

      door_number: '',
      cardinal: '',
      street: '',
      neighborhood: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
    })
  }

  handleDelete = (id) => {

    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    console.log("Delete  ADDRESSE:", id)

    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/addresses/${id}`, { headers }

    ).then(res => {
      console.log(res)
      this.getUserAddresses();
    }
    )


  }
  handleAddressFormChange = (e) => {

    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddressFormSubmit = (e) => {
    e.preventDefault()

    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    console.log("SUBMITTING NEW ADDRESSE:", this.state)

    axios.put(`${process.env.REACT_APP_BACKEND_URL}/addresses/${this.state.id}`, { address: this.state }, { headers }

    ).then(res => {
      console.log("RES AFTER POSTING NEW AFFRESS:", res)
      this.getUserAddresses();
    }
    )
  }



  getUserAddresses = () => {

    console.log(process.env.REACT_APP_BACKEND_URL)

    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/addresses`, { headers }).then(res => {

      this.setState({ addresses: res.data });
      console.log("USER ADDRESS RES:", res.data);

      this.setState({
        addresses: res.data
      });
    })
  }


  getUser = () => {
    const token = localStorage.getItem("token")
    const id = this.state.user.id
    
     console.log("USER TOKEN:", token)
    //  console.log("USER ID:", id)
    if(token != null){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/current`, { headers }).then(
        
        
        res => {
          if(res.data != null){ 
              this.setState({ user: res.data });
              console.log("USER OBJ:", res.data);
        
              this.setState({
                user: {
                  id: res.data.user.id,
                  first_name: res.data.user.first_name,
                  last_name: res.data.user.last_name,
                  phone_number: res.data.user.phone_number,
                  email: res.data.user.email,
                  created_at: res.data.user.created_at,
                }
              });   
    
          }else{
            
          }
  
      })
    } else{ console.log("DID NOT HAVE ID OR TOKEN ")}

  }

  openEditModal = (address) => {
    console.log(address)
    this.setState({
      id: address.id,
      lat: address.lat,
      lng: address.lng,
      door_number: address.door_number,
      cardinal: address.cardinal,
      street: address.street,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      postal_code: address.postal_code,
      country: address.country,
    }, () => { this.onOpenModal() })


  }

  getUserSavedAddresses = () => {
    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/addresses/saved`, { headers }).then(res => {

      this.setState({
        savedAddresses: res.data
      });
    })
  }
  componentDidMount() {
    this.getUserAddresses();
    this.getUserSavedAddresses();
    this.getUser();
  }

  toggle = () => {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  editLatAndLng = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.setState({
      lat,
      lng
    })
  }

  render() {
    const { modalAddress } = this.state;
    const addressObj = this.state.addresses.map(address => {
      return (
        <li>
          <span class="text-muted icon icon-home mr-3" style={{ "font-size": "20px" }}></span>
          Address:
          <small> <a href="#somevalid"
            style={{
              "font-size": "15px",
              //  height:" 43px",
              // 'line-height': "3.05", //Space bellow && above
              // 'white-space': "nowrap"  //Makes 1 line
            }}>
            {address.fullAddress}
          </a>

          
            <button href="#showpnmap" key={address.id}
            onClick={()=>{this.openEditModal(address)}}

              style={{
                color: "rgb(56,90,151)",
                'font-size': "14px",
                'font-weight': "600",
                height: " 43px",
                'line-height': "3.05",
                padding: "0 17px",
                position: "relative",
                "vertical-align": "middle",
                'white-space': "nowrap",

              }}>Edit</button>

          </small>
        </li>)
    });

    const savedAddressesObj = this.state.savedAddresses.map(savedAddress => {
      return (
        <li class="list-group-item" key={savedAddress.id}>

          <i class="fa fa-map" aria-hidden="true"></i> 

          <Link onClick={() => this.setState({ openModal: true, modalAddress: { lat: savedAddress.address.lat, lng: savedAddress.address.lng, address: savedAddress.address.fullAddress } })} to="#">{savedAddress.address.fullAddress}</Link>
        </li>
      )
    })

    const mapBasicStyle = {
      width: '500px',
      height: '500px',
      // 'box-sizing': "border-box",
    }

    const title = 'Some Title';
    const shareUrl = 'http://google.com'

    return (
      <div id="profile-main" style={{backgroundColor: " #ccefff"}}>

        {/* <someComp/> */}
        {/* Profile &middot;  */}


        <ReactModal open={this.state.editModalOpen} onClose={this.onCloseModal} center>
          <div style={{height: "550px"}}>
          {console.log(process.env.REACT_APP_OW_JS_API_KEY)}
          <Map
              initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng
            }}
            style={mapBasicStyle}
            google={this.props.google}
            zoom={18}
          >

            <Marker
              onClick={this.onMarkerClick}
                draggable={true} 
                position={{ lat: this.state.lat, lng: this.state.lng }}
                onDragend={(t, map, coord) => { this.editLatAndLng(coord) }}
              name={'Current location'}
            />

            {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
            {/* <div> */}
            {/* Selected to show here!! */}
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
            {/* </div> */}
            {/* </InfoWindow> */}
          </Map>
          </div>

          <div className="container" style={{
            position: "relative",
            padding: "40px 40x",
            background: "#eee",
            paddingBlockStart: "20px",
            paddingBlockEnd: "20px",
            // 'boxSizing': "border-box",
            'backgroundColor': "white",
            'boxShadow': "0px 0px 15px black",
            'borderRadius': "5px"

          }}>
            <div className="row"  >
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <a className="btn big-register" style={{ margin: "60px 80x" }} >Edit your address</a></div>
              <div className="col-sm-4"></div>
            </div>

            <div className="form AddressBox " style={{ padding: "20px 200px", }}>
              <form onSubmit={this.handleAddressFormSubmit} >

                <input id="street" style={{
                  overflow: "auto", margin: "12px", 'borderCollapse': "collapse",
                }} className="form-control" type="street" placeholder="Street" name="street"
                  value={this.state.street}
                  onChange={(e) => this.handleAddressFormChange(e)}></input>

                <input id="neighborhood" style={{ overflow: "auto", margin: "12px", 'borderCollapse': "collapse" }} className="form-control" type="neighborhood" placeholder="neighborbhood" name="neighborhood"
                  value={this.state.neighborhood}
                  onChange={(e) => this.handleAddressFormChange(e)}></input>


                <input id="city" style={{
                  overflow: "auto", margin: "12px", 'borderCollapse': "collapse",
                }} className="form-control" type="city" placeholder="City" name="city"
                  value={this.state.city}
                  onChange={(e) => this.handleAddressFormChange(e)}></input>



                <input id="state" style={{
                  overflow: "auto", margin: "12px", 'borderCollapse': "collapse",
                }} className="form-control" type="state" placeholder="State" name="state"
                  value={this.state.state}
                  onChange={(e) => this.handleAddressFormChange(e)}></input>
                {/* <PhoneInput
         inputComponent={ SmartInput }
         placeholder="Enter phone number"
         value={ this.state.value }
         onChange={ value => this.setState({ value }) }
          /> */}



                <input id="door_number" style={{ overflow: "auto", margin: "12px", 'marginBlockEnd': "2.33em" }} className="form-control" type="door_number" placeholder="Door Number" name="door_number"
                  value={this.state.door_number}
                  onChange={(e) => this.handleAddressFormChange(e)}></input>

                <input id="country" style={{
                  overflow: "auto", margin: "12px", 'borderCollapse': "collapse",
                }} className="form-control" type="country" placeholder="Country" name="country"
                  value={this.state.country}
                  onChange={(e) => this.handleAddressFormChange(e)}></input>

                <input className="btn btn-default btn-login" style={{

                  'marginRight': "auto",
                  'marginLeft': "auto",
                  display: "block",
                  padding: "8px 16px",
                  'fontSize': " 16px",
                  color: "#ffff",
                  // 'background-color': "#3fc1c9",
                  // 'background-color':"#1273de",
                  'backgroundColor': "#fccb00",
                  'border': "0",
                  'borderRadius': "2px",
                  cursor: "pointer",
                  transition: "background-color. 15s ease-in",
                  'marginTop': "16px"
                }}
                  type="submit" value="Edit"></input>
              </form>
            </div>
          </div>
        </ReactModal>

        <Modal isOpen={this.state.openModal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{modalAddress.address}</ModalHeader>
          <ModalBody>
            <Card style={{ width: "550px", height: '600px', padding: "0.25rem" }}>

              {/* , padding: "0.25rem" */}

              <CardBody style={{ width: "600px", height: '600px', 'boxSizing': "border-box" }}>
                <Map
                  center={{
                    lat: modalAddress.lat,
                    lng: modalAddress.lng
                  }}
                  style={mapBasicStyle}
                  google={this.props.google}
                  zoom={18}
                >

                  <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: modalAddress.lat, lng: modalAddress.lng }}
                    name={'Current location'}
                  />

                  {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
                  {/* <div> */}
                  {/* Selected to show here!! */}
                  {/* <h1>{this.state.selectedPlace.name}</h1> */}
                  {/* </div> */}
                  {/* </InfoWindow> */}
                </Map>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <div className="row align-items-center">
              <div className="Demo__some-network">
                <FacebookShareButton
                  url={shareUrl}
                  quote={title}
                  className="Demo__some-network__share-button">
                  <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
              </div>


              <div className="Demo__some-network">
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="Demo__some-network__share-button">
                  <TwitterIcon
                    size={32}
                    round />
                </TwitterShareButton>

                <div className="Demo__some-network__share-count">
                  &nbsp;
          </div>
              </div>


              <div className="Demo__some-network">
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="Demo__some-network__share-button">
                  <TelegramIcon size={32} round />
                </TelegramShareButton>

                <div className="Demo__some-network__share-count">
                  &nbsp;
          </div>
              </div>

              <div className="Demo__some-network">
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  className="Demo__some-network__share-button">
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <div className="Demo__some-network__share-count">
                  &nbsp;
          </div>
              </div>

              <div className="Demo__some-network">
                <GooglePlusShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button">
                  <GooglePlusIcon
                    size={32}
                    round />
                </GooglePlusShareButton>
              </div>

              <div className="Demo__some-network">
                <LinkedinShareButton
                  url={shareUrl}
                  title={title}
                  windowWidth={750}
                  windowHeight={600}
                  className="Demo__some-network__share-button">
                  <LinkedinIcon
                    size={32}
                    round />
                </LinkedinShareButton>
              </div>
            </div>
          </ModalFooter>
        </Modal>

        {/* <body class="with-top-navbar"> */}


        <div class="growl" id="app-growl"></div>

        {/* <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-primary app-navbar">
            <a class="navbar-brand" href="index.html">
              <img src={require("../v4/docs/assets/img/brand-white.png" )}alt="brand" />
            </a>

            <button
              class="navbar-toggler navbar-toggler-right d-md-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
            <Fragment>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="profile/index.html">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="modal" href="#msgModal">Messages</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="docs/index.html">Docs</a>
                </li>

                <li class="nav-item d-md-none">
                  <a class="nav-link" href="notifications/index.html">Notifications</a>
                </li>
                <li class="nav-item d-md-none">
                  <a class="nav-link" data-action="growl">Growl</a>
                </li>
                <li class="nav-item d-md-none">
                  <a class="nav-link" href="login/index.html">Logout</a>
                </li>
              </ul>
            </Fragment>

              <form class="form-inline float-right d-none d-md-flex">
                <input class="form-control" type="text" data-action="grow" placeholder="Search" />
              </form>

              <Fragment>
              <ul id="#js-popoverContent" class="nav navbar-nav float-right mr-0 d-none d-md-flex">
                <li class="nav-item">
                  <a class="app-notifications nav-link" href="notifications/index.html">
                    <span class="icon icon-bell"></span>
                  </a>
                </li>

                <li class="nav-item ml-2">
                  <button class="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover">
                    <img class="rounded-circle" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                  </button>
                </li>
              </ul>
              </Fragment>
              <someComp/>
              <Fragment>
              <ul class="nav navbar-nav d-none" id="js-popoverContent">
                <li class="nav-item"><a class="nav-link" href="#" data-action="growl">Growl</a></li>
                <li class="nav-item"><a class="nav-link" href="login/index.html">Logout</a></li>
              </ul>
              </Fragment>
            </div>
          </nav> */}

        <div class="modal fade" id="msgModal" tabindex="-1" role="dialog" aria-labelledby="msgModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title">Messages</h5>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>


              <div class="modal-body p-0 js-modalBody" >

                <div class="modal-body-scroller">
                  <div class="media-list media-list-users list-group js-msgGroup">
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-fat.jpg")} />
                        <div class="media-body">
                          <strong>Jacob Thornton</strong> and <strong>1 other</strong>
                          <div class="media-body-secondary">
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-mdo.png")} />
                        <div class="media-body">
                          <strong>Mark Otto</strong> and <strong>3 others</strong>
                          <div class="media-body-secondary">
                            Brunch sustainable placeat vegan bicycle rights yeah…
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        <div class="media-body">
                          <strong>Dave Gamache</strong>
                          <div class="media-body-secondary">
                            Brunch sustainable placeat vegan bicycle rights yeah…
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-fat.jpg")} />
                        <div class="media-body">
                          <strong>Jacob Thornton</strong> and <strong>1 other</strong>
                          <div class="media-body-secondary">
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-mdo.png")} />
                        <div class="media-body">
                          <strong>Mark Otto</strong> and <strong>3 others</strong>
                          <div class="media-body-secondary">
                            Brunch sustainable placeat vegan bicycle rights yeah…
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        <div class="media-body">
                          <strong>Dave Gamache</strong>
                          <div class="media-body-secondary">
                            Brunch sustainable placeat vegan bicycle rights yeah…
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-fat.jpg" />
                        <div class="media-body">
                          <strong>Jacob Thornton</strong> and <strong>1 other</strong>
                          <div class="media-body-secondary">
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam &hellip;
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-mdo.png" />
                        <div class="media-body">
                          <strong>Mark Otto</strong> and <strong>3 others</strong>
                          <div class="media-body-secondary">
                            Brunch sustainable placeat vegan bicycle rights yeah…
                              </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="media">
                        <img class="rounded-circle media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        <div class="media-body">
                          <strong>Dave Gamache</strong>
                          <div class="media-body-secondary">
                            Brunch sustainable placeat vegan bicycle rights yeah…
                              </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="d-none m-3 js-conversation">

                    <Fragment>
                      <ul class="media-list media-list-conversation">
                        <li class="media media-current-user mb-4">
                          <div class="media-body">
                            <div class="media-body-text">
                              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.
                              </div>
                            <div class="media-footer">
                              <small class="text-muted">
                                <a href="#">Dave Gamache</a> at 4:20PM
                                </small>
                            </div>
                          </div>
                          <img class="rounded-circle media-object d-flex align-self-start ml-3" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        </li>

                        <li class="media mb-4">
                          <img class="rounded-circle media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-fat.jpg" />
                          <div class="media-body">
                            <div class="media-body-text">
                              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                              </div>
                            <div class="media-body-text">
                              Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                              </div>
                            <div class="media-body-text">
                              Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                              </div>
                            <div class="media-footer">
                              <small class="text-muted">
                                <a href="#">Fat</a> at 4:28PM
                                </small>
                            </div>
                          </div>
                        </li>

                        <li class="media mb-4">
                          <img class="rounded-circle media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-mdo.png" />
                          <div class="media-body">
                            <div class="media-body-text">
                              Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
                              </div>
                            <div class="media-body-text">
                              Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                              </div>
                            <div class="media-footer">
                              <small class="text-muted">
                                <a href="#">Mark Otto</a> at 4:20PM
                                </small>
                            </div>
                          </div>
                        </li>

                        <li class="media media-current-user mb-4">
                          <div class="media-body">
                            <div class="media-body-text">
                              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.
                              </div>
                            <div class="media-footer">
                              <small class="text-muted">
                                <a href="#">Dave Gamache</a> at 4:20PM
                                </small>
                            </div>
                          </div>
                          <img class="rounded-circle media-object d-flex align-self-start ml-3" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        </li>

                        <li class="media mb-4">
                          <img class="rounded-circle media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-fat.jpg" />
                          <div class="media-body">
                            <div class="media-body-text">
                              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                              </div>
                            <div class="media-body-text">
                              Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                              </div>
                            <div class="media-body-text">
                              Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                              </div>
                            <div class="media-footer">
                              <small class="text-muted">
                                <a href="#">Fat</a> at 4:28PM
                                </small>
                            </div>
                          </div>
                        </li>

                        <li class="media mb-4">
                          <img class="rounded-circle media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-mdo.png" />
                          <div class="media-body">
                            <div class="media-body-text">
                              Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
                              </div>
                            <div class="media-body-text">
                              Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                              </div>
                            <div class="media-footer">
                              <small class="text-muted">
                                <a href="#">Mark Otto</a> at 4:20PM
                                </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </Fragment>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Users</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>

              <div class="modal-body p-0">
                <div class="modal-body-scroller">
                  <ul class="media-list media-list-users list-group">
                    <li class="list-group-item">
                      <div class="media w-100">
                        <img class="media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-fat.jpg" />
                        <div class="media-body">

                          <button class="btn btn-secondary btn-sm float-right">
                            <span class="glyphicon glyphicon-user"></span> Follow
                              </button>

                          <strong>Jacob Thornton</strong>
                          <p>@fat - San Francisco</p>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media w-100">
                        <img class="media-object d-flex align-self-start mr-3" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        <div class="media-body">

                          <button class="btn btn-secondary btn-sm float-right">
                            <span class="glyphicon glyphicon-user"></span> Follow
                              </button>

                          <strong>Dave Gamache</strong>
                          <p>@dhg - Palo Alto</p>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media w-100">
                        <img class="media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-mdo.png" />
                        <div class="media-body">

                          <button class="btn btn-secondary btn-sm float-right">
                            <span class="glyphicon glyphicon-user"></span> Follow
                              </button>

                          <strong>Mark Otto</strong>
                          <p>@mdo - San Francisco</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container pt-4 pb-5">
          <div class="row">
            <div class="col-lg-3">
              <div class="card card-profile mb-4">
                <div class="card-header"
                  style={{
                    backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"
                  }}></div>
                <div class="card-body text-center">

                  <a href="profile/index.html">
                    <img class="card-profile-img" src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                  </a>

                  <h6 class="card-title">
                    <a class="text-inherit" href="profile/index.html">{this.state.user.first_name} {this.state.user.last_name}</a>
                  </h6>

                  <p class="mb-4">I wish i was a little bit taller, wish i was a baller, wish i had a girl… also.</p>

                  <ul class="card-menu">
                    <li class="card-menu-item">
                      <a href="#userModal" class="text-inherit" data-toggle="modal">
                        Email
                            <h6 class="my-0">{this.state.user.email}</h6>
                      </a>
                    </li>

                    <li class="card-menu-item">
                      <a href="#userModal" class="text-inherit" data-toggle="modal">
                        Phone
                            <h6 class="my-0">{this.state.user.phone_number}</h6>
                      </a>
                    </li>

                  </ul>

                </div>
              </div>

              <div class="card d-md-block d-lg-block mb-4">
                <div class="card-body">
                  <h6 class="mb-3"
                    style={{
                      color: "rgb(56,90,151)",
                      'font-size': "18px",
                      'font-weight': "600",
                      height: " 23px",
                      textAlign: "center",
                      paddingRight: "17px"
                    }}>About
         <small> <a href="someplace"
                      style={{
                        color: "rgb(56,90,151)",
                        'border-left': "2px solid #e9eaed",
                        height: " 43px",
                        //  'line-height': "1.05",
                        paddingLeft: "17px",

                      }}>Edit
               </a></small></h6>
                  <ul class="list-unstyled list-spaced">
                    <li>
                      <span class="iconic iconic-envelope-closed" title="envelope closed" aria-hidden="true">Email: </span>

                    </li>




                    <li><span class="text-muted icon icon-calendar mr-3" style={{
                      "font-size": "20px",
                    }}></span>Recent Trips <a href="#" style={{
                      "font-size": "17px",
                      'font-weight': "300",
                      paddingLeft: "5px"
                    }}>View</a></li>
                    <li>
                      <span class="text-muted icon icon-users mr-3" style={{
                        "font-size": "20px",
                      }}></span>Favorites: <a href="#" style={{
                        "font-size": "17px",
                        'font-weight': "300",
                        paddingLeft: "5px"
                      }}>These places</a>
                    </li>
                    <li>
                      <span><i class="material-icons"
                        style={{
                          "font-size": "14px",
                          "font-size": "20px",

                          color: "gray",
                          paddingRight: "16px"
                        }}>
                        work</i>Works at: </span> <a href="#"
                          style={{
                            "font-size": "16px",
                            'font-weight': "350",
                            paddingLeft: "5px"
                          }}>
                        Some place</a>
                    </li>
                    <ul>
                      {addressObj}
                    </ul>

                    {/* <li><span class="text-muted icon icon-location-pin mr-3"></span>From <a href="#">Seattle, WA</a></li> */}

                  </ul>
                </div>
              </div>

              <div class="card d-md-block d-lg-block mb-4">
                <div class="card-body">
                  <h6 class="mb-3">Photos <small>· <a href="#">Edit</a></small></h6>
                  <div data-grid="images" data-target-height="150">
                    <div>
                      <img data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_5.jpg" />
                    </div>

                    <div>
                      <img data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_6.jpg" />
                    </div>

                    <div>
                      <img data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_7.jpg" />
                    </div>

                    <div>
                      <img data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_8.jpg" />
                    </div>

                    <div>
                      <img data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_9.jpg" />
                    </div>

                    <div>
                      <img data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_10.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">

              <ul class="list-group media-list media-list-stream mb-4">

                <li class="media list-group-item p-4">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search..." />
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-secondary align-self-stretch">
                        {/* <span class="icon icon-camera"></span> */}
                      </button>
                    </div>
                  </div>
                </li>

                <li class="media list-group-item p-4">
                  <img
                    class="media-object d-flex align-self-start mr-3"
                    src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                  <div class="media-body">
                    <div class="media-heading">
                      <small class="float-right text-muted">4 min</small>
                      <h6>Search Location</h6>
                    </div>

                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>

                    <div class="media-body-inline-grid" data-grid="images">
                      <div style={{ "display": "none" }}>
                        <img data-action="zoom" data-width="1050" data-height="700" src="../v4/docs/assets/img/unsplash_1.jpg" />
                      </div>

                      <div style={{ "display": "none" }}>
                        <img data-action="zoom" data-width="640" data-height="640" src=".../v4/docs/assets/img/instagram_1.jpg" />
                      </div>

                      <div style={{ "display": "none" }}>
                        <img data-action="zoom" data-width="640" data-height="640" src="../v4/docs/assets/img/instagram_13.jpg" />
                      </div>

                      <div style={{ "display": "none" }}>
                        <img data-action="zoom" data-width="1048" data-height="700" src="../v4/docs/assets/img/unsplash_2.jpg" />
                      </div>
                    </div>

                    <ul class="media-list mb-2">
                      <li class="media mb-3">
                        <img class="media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-fat.jpg" />
                        <div class="media-body">
                          <strong>Jacon Thornton: </strong>
                          Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                            </div>
                      </li>
                      <li class="media">
                        <img class="media-object d-flex align-self-start mr-3" src="../v4/docs/assets/img/avatar-mdo.png" />
                        <div class="media-body">
                          <strong>Mark Otto: </strong>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="media list-group-item p-4">
                  <img
                    class="media-object d-flex align-self-start mr-3"
                    src="../v4/docs/assets/img/avatar-fat.jpg" />
                  <div class="media-body">
                    <div class="media-body-text">
                      <div class="media-heading">
                        <small class="float-right text-muted">12 min</small>
                        <h6>Jacob Thornton</h6>
                      </div>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                    </div>
                  </div>
                </li>

                <li class="media list-group-item p-4">
                  <img
                    class="media-object d-flex align-self-start mr-3"
                    src="../v4/docs/assets/img/avatar-mdo.png" />


                  <div class="media-body">
                    <div class="media-heading">
                      <small class="float-right text-muted">34 min</small>
                      <h6>Mark Otto</h6>
                    </div>

                    <p>
                      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>

                    <div class="media-body-inline-grid" data-grid="images">
                      <img style={{ "display": "none" }} data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_3.jpg" />
                    </div>

                    <ul class="media-list">
                      <li class="media">
                        <img
                          class="media-object d-flex align-self-start mr-3"
                          src={require("../v4/docs/assets/img/avatar-dhg.png")} />
                        <div class="media-body">
                          <strong>Dave Gamache: </strong>
                          Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                            </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

            </div>
            <div class="col-lg-3">
              <div class="alert alert-warning alert-dismissible d-none d-lg-block" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <a class="alert-link" href="profile/index.html">Visit your profile!</a> Check your self, you aren't looking well.
                  </div>

              <div class="card mb-4 d-none d-lg-block">
                <div class="card-body">
                  <h6 class="mb-3">Saved Addresses</h6>
                  <div data-grid="images" data-target-height="150">
                    <img class="media-object" data-width="640" data-height="640" data-action="zoom" src="../v4/docs/assets/img/instagram_2.jpg" />
                  </div>


                  <ul class="list-group" >
                    {savedAddressesObj}


                    <li class="list-group-item"> Location: {"USA"}</li>
                    <li class="list-group-item">Member Since: {this.state.created_at}</li>

                    <li class="list-group-item">{<Fragment>
                      <i class="fas fa-dove" style={{ color: "#339af0" }}>
                      </i>
                      <a href="mailto:john@testmyskills.com">john@tweeter.com</a>
                    </Fragment>}
                    </li>
                  </ul>


                  <button class="btn btn-outline-primary btn-sm">Buy a ticket</button>
                </div>
              </div>

              <div class="card mb-4 d-none d-lg-block">
                <div class="card-body">
                  <h6 class="mb-3">Recent Trips<small>· <a href="#">View All</a></small></h6>
                  <ul class="media-list media-list-stream">
                    <li class="media mb-2">
                      <img
                        class="media-object d-flex align-self-start mr-3"
                        src="../v4/docs/assets/img/avatar-fat.jpg" />
                      <div class="media-body">
                        <strong>Jacob Thornton</strong> @fat
                          <div class="media-body-actions">
                          <button class="btn btn-outline-primary btn-sm">
                            <span class="icon icon-add-user"></span> Follow</button>
                        </div>
                      </div>
                    </li>
                    <li class="media">
                      <a class="media-left" href="#">
                        <img
                          class="media-object d-flex align-self-start mr-3"
                          src="../v4/docs/assets/img/avatar-mdo.png" />
                      </a>
                      <div class="media-body">
                        <strong>Mark Otto</strong> @mdo
                          <div class="media-body-actions">
                          <button class="btn btn-outline-primary btn-sm">
                            <span class="icon icon-add-user"></span> Follow
                              </button>


                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="card-footer">
                  {this.state.user.first_name} really likes these nerds, no one knows why though.
                      </div>
              </div>

              <div class="card card-link-list">
                <div class="card-body">
                  © 2018 oway
                      <a href="#">About</a>
                  <a href="#">Help</a>
                  <a href="#">Terms</a>
                  <a href="#">Privacy</a>
                  <a href="#">Cookies</a>
                  <a href="#">Ads </a>
                  <a href="#">Info</a>
                  <a href="#">Brand</a>
                  <a href="#">Blog</a>
                  <a href="#">Status</a>
                  <a href="#">Apps</a>
                  <a href="#">Jobs</a>
                  <a href="#">Advertise</a>
                </div>
              </div>

            </div>
          </div>
        </div>





      </div >
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_OW_JS_API_KEY
})(UserProfile)