import React, { Component, Fragment } from 'react'
import SweetAlert from 'sweetalert-react';
import aaa from '../../node_modules/sweetalert/dist/sweetalert.css'
import Header from '../components/Layout/Header';
import HomeForm from './HomeForm';
import axios from 'axios';
import ModalExampleDimmer from './ModalSearch';
// import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';


export default class Home extends Component {

  state = {
    query: "",
    address: {
      id: "",
      door_number: "",
      street: "",
      neighborbhood: "",
      city: "",
      state: "",
      postal_code: "",
      lat: "",
      lng: "",
      country: ""
    }
    ,
   formatted: ""
  }

  saveAddress = (id) => {
    console.log("baaaSaving An ADDRESSE:", id, this.state.formatted.id)
    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addresses/save`, {
      "address": {
        city: "MEXI",
        country: " MEXICO ",
        door_number: "999",

        lat: "5.3600",
        lng: "4.0083",
        neighborhood: "Bouake",
        state: "JOHN JAY ",
        street: "SOME STTTT "
      }
    }, { headers }
    ).then(res => console.log(res))
  }

  saveNonExisitingAddress = (id) => {
    const {city, country, door_number, lat, lng, postal_code, state, street, neighborbhood} = this.state.address;
    console.log("baaaSaving An ADDRESSE:", id, this.state)
    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/addresses/save/new`, {
      "address": {
        city:city,
        neighborbhood: neighborbhood,
        country: country,
        door_number: door_number,
        lat: lat,
        lng: lng,
        state: state,
        street: street,
        postal_code: postal_code
      }
    }, { headers }
    ).then(res => {
      console.log(res);
      this.setState({newAddressSaved: true, query: "", addressSaved: true})
    })
  }

  viewAddress=(lat,lng) => {
    // if(lat || lng == null){
    //   console.log("NO DATA")
    // } else {
    console.log("LATITUDE", lat)
    console.log("LONGITUDE", lng)
  // }
  }

  getAddressComponents = function geocode(formatted) {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: formatted,
        key: 'AIzaSyA2FCoGUKHs1BzQ5V8Yy7LsvtfW5xuE5VQ'
      }
    })
      .then((response) => {
        console.log(response)
        const formattedAddress = response.data.results[0].formatted_address
        //  console.log("FORMATTED ADDRESS:" , formattedAddresses
        const door_number = response.data.results[0].address_components[0].short_name;
        const street = response.data.results[0].address_components[1].short_name;
        const city = response.data.results[0].address_components[3].long_name;
        const state = response.data.results[0].address_components[5].long_name;
        const postal_code = response.data.results[0].address_components[7].long_name;
        const country = response.data.results[0].address_components[6].long_name;
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        // console.log("GEO-CODE RES: ", response.data.results[0])
        // console.log("ADDRESS COMPONENT: ", response.data.results[0].address_components)
        // console.log("DOOR NUMBER:", door_number)
        // console.log("STREET:", street)
        // // console.log("NEIGHBORHOOD", neighborbhood)
        // console.log("CITY:", city)
        // console.log("STATE:", state)
        // console.log("POSTAL CODE:", postal_code)
        // console.log("COUNTRY:", country)  
        // console.log("Lat in AXIOS:", lat)  
        this.setState(
          {

            address: {
              id: response.data.results[0].place_id,
              door_number: door_number,
              street: street,
              city: city,
              state: state,
              postal_code: postal_code,
              lat: lat,
              lng: lng,
              country: country
            }

          }, () => console.log("ADDRESS OBJECT NEW STATE: ", this.state.address))
      })
      .catch((error) => console.log(error))
  }

  handleSearchBar = () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.query}&key=${process.env.REACT_APP_OW_JS_API_KEY}`


    //BACKEND 
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/addresses/search?query=${this.state.query}`).then(res => {
      
      if (res.data.length) {
        console.log('fromm apiiiii', res);
        this.setState({
          formatted: res.data[0].fullAddress
        });
      } else {
        axios.get(`${proxyurl}${url}`, { headers }).then((res) => {
          let formatted = res.data.results[0].formatted_address;
          console.log('not fromm apiiiii', res);
          
          this.getAddressComponents(formatted) //calling Geocode to get long lart and ID

          this.setState({
            formatted: formatted
          }, () => console.log("GOOGLE RES:", res.data.results[0].formatted_address, "FORMATTED:", formatted)) // Should save addresses search in DB in the future
        })
      }
    })
  }


  //HANDLE QUERY 
  handleSearchChange = (e) => {
    console.log("SEARCH WORD in query:", e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }




  render() {
    console.log("FORMATTED:", this.formated, "THIS STATE FORMATTED:",this.state.formated)
    console.log('ttttttttt', this.state);


    const { formatted } = this.state;
    return (
      <div className="main-pages-div">
    
        <SweetAlert
          show={this.state.newAddressSaved}
          title="New Address"
          text="New Address Saved Successfully"
          onConfirm={() => this.setState({ newAddressSaved: false })}/>

        <div className={'app-container'} >
          <Fragment>
          <div class="search-cointainer">
            <div class="ui basic center aligned segment"  >
              <div class="ui action left icon input"
                style={{
                  'minHeight': "1em",
                  'boxShadow': "0 0 0 0 rgba(34,36,38,.15) inset",
                  outline: "0",
                  border: "none",
                  verticalAlign: "baseline",
                  // background: "#e0e1e2 none",
                  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",

                  'fontSize': "2rem",//size

                  fontWeight: "700",
                  lineHeight: "2em",
                  fontStyle: "normal",
                  // not useful it seems
                  textAlign: "center",
                  textDecoration: "none",

                }}
              >

                <input type="text" placeholder="Find places ..."
                  onChange={this.handleSearchChange}
                  name="query"
                  value={this.state.query}
                  style={{
                   'border-radius': '2.4571429rem',
                   width:'400px', //width
                   height:'60px',

                    borderRightColor: "transparent!important",


                    paddingLeft: "4.67142857em!important",
                    // paddingRight: "1em!important",
                    boxShadow: "none",
                    margin: 0,
                    flex: "1 0 auto",
                    outline: 0,
                    textAlign: "left",
                    lineHeight: "2em",
                    fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                    padding: ".67857143em 1em",
                    background: "#fff",
                    border: "1px solid rgba(34,36,38,.15)",
                    color: "rgba(0,0,0,.87)",
                    // borderRadius: ".28571429rem",
                    maxWidth: "100%",
                    overflow: "visible"
                  }}
                />

                {/* <i aria-hidden="true" class="search icon"> */}
                {/*                 
                type="image/x-icon"
                  style={{
                    pointerEvents: "none",
                    right: "auto",
                    left: "1px",
                    borderRadius: ".28571429rem 0 0 .28571429rem",
                    cursor: "default",
                    position: "absolute",
                    lineHeight: "1",
                    textAlign: "center", //not working
                    top: 0,
                    // right: 0,
                    margin: 0,
                    height: "100%",
                    width: "2.67142857em",
                    opacity: ".5",
                    content: "\f002",
                    // borderRadius: "0 .28571429rem .28571429rem 0",
                    '-webkit-transition': " opacity .3s ease",
                    transition: "opacity .3s ease", //Not sure if this is working [Test aagain ]
                    fontSize: "1em"
                  }}
                > */}
                {/* </i> */}
                {/* <i aria-hidden="true" class="spinner loading icon"></i> */}

                <button class="ui blue button"
                  onClick={this.handleSearchBar}
                  style={{
                    float: "left ",
                    paddingTop: ".78571429em",
                    paddingBottom: ".78571429em",
                    margin: 0,
                    // borderRadius: "0 .28571429rem .28571429rem 0",
                    backgroundColor: "#2185d0",
                    color: "#fff",
                    textShadow: " none",
                    backgroundImage: "none",
                    padding: ".98571429em 1.6em .98571429em", // this affects the search button pading top bottom lenght(right & left)  ex: top val, length bottom val

                    // ALL BUTTONS - .ui.button 
                    'minHeight': "1em",
                    'boxShadow': "0 0 0 0 rgba(34,36,38,.15) inset",
                    outline: "0",
                    border: "none",
                    verticalAlign: "baseline",
                    fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                    fontSize: "100%",
                    fontWeight: "800",
                    lineHeight: "2em",
                    // lineHeight: "8em",
                    fontStyle: "bold",
                    // not useful it seems
                    textAlign: "center",
                    textDecoration: "none",

                    //Newly Added 
                    textRendering: "auto",
                    // color: "initial", 
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textIndent: "0px",
                    font: " 900 16px system-ui", 


                    //Not Important
                    left: "0",
                    // position: "absolute",
                    'text-align': "center",
                    top: "50%",
                    // width: "100%",
                    ' margin-top': " -.5em",
                     'borderTopRightRadius': '2.4571429rem',
                     'borderBottomRightRadius':'2.4571429rem',
                  }}
                >Search</button>
                
              </div>
              {formatted && (
                  <ul>

                  

                   
              <button class="ui button"
                   style={{ 
                    backgroundColor:'white',
                    height:'4rem', 
                    width: '35rem', marginTop:'0.1rem'}}> <a href="#mmm">{formatted}   
             </a></button> <div class="ui vertical divider" style={{height:'9px', color:'black'}}></div>

              <button class="ui button"
                   style={{ backgroundColor:'rgb(232,232,232)',
                    height:'4rem', 
                    color:'white',
                    width: '35rem', marginTop:'0.1.6rem'}}>
                     <ModalExampleDimmer address={this.state.formatted}/> 

                      <button class="ui rgb(44,184,75) button" 
                      style={{ backgroundColor:'rgb(44,184,75)', 
                      color:'white',
                      width:'90px',
                      marginLeft:'4px',
                      marginRight:'4px'
                      }}>Share</button>
      
                      <button class="ui teal button" 
                      style={{
                        marginLeft:'5px', 
                        }}>invite <i class="fas fa-plus" style={{marginLeft:'4px'}}></i></button>
                        <button class="ui primary button" style={{float:'right', width:'90px'}}>Save </button>
                     </button>
               

            
                   
  
            
                   
           

                    {/*                     
                    <div class="ui menu" style={{ backgroundColor:'white',
                    height:'6rem', 
                    width: '35rem'}}><div class="item"><button class="ui primary button">View up</button></div><div class="item"><button class="ui button">Save</button></div><div class="item"><button class="ui button">Share</button></div>{formatted}</div>
                     */}
                     
                    {/* <li class="list-group-item"> {}</li>
                    <li class="list-group-item" >
                      <i class="fa fa-map" aria-hidden="true"></i>
                      <a href="#mmm">{formatted}</a>
                    </li> 

                    {this.state.addressSaved ?  

                    <div class="header">No results found.</div> : 
                    
                    <button onClick={() => this.saveNonExisitingAddress(this.state.address.id)}>Save Address</button>}
                    <button onClick={() => this.viewAddress()}>View on Map</button>
*/}
                  </ul>
                )}
              
              </div>
              {/* <div><div class="ui inverted menu"><a class="red active item">Red</a><a class="orange active item">Orange</a><a class="yellow active  item">Yellow</a><a class="olive active item">Olive</a><a class="green active item">Green</a><a class="teal active item">Teal</a></div><div class="ui inverted menu"><a class="blue active item">Blue</a><a class="violet active item">Violet</a><a class="purple active item">Purple</a><a class="pink active item">Pink</a><a class="brown active item">Brown</a><a class="grey active item">Grey</a></div></div> */}
            </div>

          </Fragment>
          Container Begin
             <Header />
             
          <div className='app-content'>
            <HomeForm  />
          </div>

          End Container
       </div>



      </div>

    )
  }

}
