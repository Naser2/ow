import React, { Component, Fragment } from 'react'
import Header from '../components/Layout/Header';
import HomeForm from './HomeForm';
import axios from 'axios';
// import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';


export default class Home extends Component {
  
  state ={
    query:"",
    addresses: []
  }

  saveAddress=(id) => {
    const token = localStorage.getItem("token")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    console.log("Saving An ADDRESSE:", this.state )
    axios.post("http://localhost:3001/user/addresses/save",{address_id: id}, {headers}
    ).then( res => console.log(res))
  }

  viewAddress=(lat,lng) => {
    console.log("Lat", lat)
    console.log("Lng", lng)

  }
  
  handleSearchBar =() => {
    const headers = {
      'Content-Type': 'application/json',
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.query}&key=${process.env.REACT_APP_OW_JS_API_KEY}`

    axios.get(`http://localhost:3001/addresses/search?query=${this.state.query}`).then( res => {
      this.setState({addresses: res.data});
       console.log("USER ADDRESS RES:", res.data);
       this.setState({
        addresses: res.data
        });
        if(res.data.length == 0) {
          axios.get(`${proxyurl}${url}`, {headers}).then((res)=>{
            console.log(res)
          })
        }
     })
}

 handleSearchChange =(e) => {
  console.log(e.target.value)
  this.setState({
    [ e.target.name]: e.target.value
  })
}
  render() {
    return (
      <div className="main-pages-div">

    
       <div className={'app-container'} >
       <Fragment>
      
      <div class="ui basic center aligned segment"  >
          <div class="ui action left icon input" 
          style={{'minHeight': "1em",             
              'boxShadow': "0 0 0 0 rgba(34,36,38,.15) inset",
                outline: "0",
                border: "none",
                verticalAlign: "baseline",
                // background: "#e0e1e2 none",
                fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
            
                'fontSize': "1rem",

                fontWeight: "700",
                lineHeight: "2em",
                fontStyle: "normal",
                // not useful it seems
                textAlign: "center",
                textDecoration: "none",

            }}
            >

      <input type="text" placeholder="Search in your addresses.." 
      onChange={this.handleSearchChange} 
      name="query"
        style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightColor: "transparent!important",
                //Top 3 control input right corner top && bottom radius & colors
                //https://stackoverflow.com/questions/35341502/how-to-use-border-radius-only-for-1-corner-react-native

                  paddingLeft: "2.67142857em!important",
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
                  borderRadius: ".28571429rem",
                  maxWidth: "100%",
                  overflow: "visible"
                }}
                />

      <i aria-hidden="true" class="search icon"  type="image/x-icon" 
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
                  right: 0,
                  margin: 0,
                  height: "100%",
                  width: "2.67142857em",
                  opacity: ".5",
                  content: "\f002",
                  // borderRadius: "0 .28571429rem .28571429rem 0",
                  '-webkit-transition':" opacity .3s ease",
                  transition: "opacity .3s ease", //Not sure if this is working [Test aagain ]
                  fontSize: "1em"
                }}
          ></i>
          
          <button class="ui blue button" 
          onClick={this.handleSearchBar}
                style={{
                  float:"left ",
                  paddingTop: ".78571429em",
                  paddingBottom: ".78571429em",
                  
                  margin: 0,
                  borderRadius: "0 .28571429rem .28571429rem 0",
                  backgroundColor: "#2185d0",
                  color: "#fff",
                  textShadow:" none",
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
                  fontWeight: "700",
                  lineHeight: "2em",
                  fontStyle: "normal",
                  // not useful it seems
                  textAlign: "center",
                  textDecoration: "none",
                    
                //Newly Added 
                  textRendering: "auto",
                  // color: "initial", 
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textIndent:"0px",
                  font:" 400 11px system-ui",
                

                  //Not Important
                  left: "0",
                  // position: "absolute",
                  'text-align': "center",
                  top: "50%",
                  // width: "100%",
                  ' margin-top':" -.5em"
                }}
                >

        Search
      </button>
      </div>


          {
            this.state.addresses.map((address)=>{
              return (
                  <div>
                    {address.fullAddress}
                    <button onClick={()=>this.saveAddress(address.id)}>Save Address</button>
                    <button onClick={()=>this.viewAddress(address.lat, address.lng)}>View on Map</button>

                  </div>
              )
            })
          }

<div class="ui horizontal divider"></div>

<button class="ui teal icon left labeled button"
      style={{
          backgroundColor:" #E95D3E",
          // backgroundColor:"#008080", dark teal 
            color:"#ffffff", textShadow: "none", backgroundImage: "none",
            borderRadius: "0 .28571429rem .28571429rem 0",
            padding: ".98571429em 1.6em .98571429em",
            border:"#ffffff",
            // float:"left"
          }}
          >
<i aria-hidden="true" class="add icon">

</i>Create New Address</button></div>
    
</Fragment>
       {/* <StandaloneSearchBox></StandaloneSearchBox> */}
          Container Begin 
             <Header />
            <div className={'app-content'}>    
              <HomeForm />
            </div>

          End Container    
       </div>

    </div>
 
    )
  }
}
