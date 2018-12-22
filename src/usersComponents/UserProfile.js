import React, { Component, Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'
import axios from 'axios'
import UserAdressSearch from './UserAdressSearch'

export default class UserProfile extends Component {

  state ={
    adresses:[]
  };

  
  componentDidMount(){
    // this.getUserAddresses()
    axios.get("http://localhost:3001/users/1/addresses").then( res => {
  
      console.log(res);
 
      this.setState({
       addresses: res.data
       });
    })
  }
  // getUserAddresses = () => {
  //   axios.get("http://localhost:3001/users/1/addresses").then( res => {
  
  //      console.log(res);
  
  //      this.setSate({
  //       addresses: res.data
  //       });
  //     }
    

  //build the logic to fecth and render users adresses from back
  // axios.post(`http://localhost:3001/users/1/addresses`

  
  render() {

    const UserHeader = () => (
    <Header as='h2' >
        <Image circular src='/assets/img/John.png' style={{
        borderRadius: "500em",
        display:" inline-block",
        width: "2.5em",
        height: "auto",
        verticalAlign: 'middle',
        fontFamily:" Lato , Helvetica Neue, Arial,Helvetica, sans-serif",
        fontWeight: "700",
        lineHeight: "1.28571429em",
        textTransform:"none",
        color: "rgba(0,0,0,.87)"
      }} /> Patrick
      </Header> )

    return (
      <Fragment>
      <div>
        User Profile
        {UserHeader()}
        <h2 class="ui header" style={{'font-size':" 2.1285714rem", fontWeight: "900"}}>Account Settings
        <div class="sub header" style={{'font-size':" 1.5285714rem",
          display: "block",
          fontWeight: "400",
          padding: '0',
          margin: "0",
         }}> 
        Manage your account settings and set email preferences</div>
        </h2>
      </div>
      
        <Fragment>
          <div id="addressSearch">
            {/* {UserAdressSearch()} */}
            {/* 
                  
    -webkit-box-flex: 1.
    -ms-flex: 1 0 auto.
  
    
    -webkit-tap-highlight-color: rgba(255,255,255,0).
   
  
  
            
            */}
    <div class="ui basic center aligned segment">
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
                style={{
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
                }}>

         Search
    </button>
    </div>
    <div class="ui horizontal divider"></div>
    
    <button class="ui teal icon left labeled button"
            style={{
                backgroundColor:" #E95D3E",
                // backgroundColor:"#008080", dark teal 
                  color:"#ffffff", textShadow: "none", backgroundImage: "none",
                  borderRadius: "0 .28571429rem .28571429rem 0",
                  padding: ".98571429em 1.6em .98571429em",
                  border:"#ffffff"
                }}>
    <i aria-hidden="true" class="add icon">
    
    </i>Create New Address</button></div>
          </div>
        </Fragment>
        
      </Fragment>)
       }
    }