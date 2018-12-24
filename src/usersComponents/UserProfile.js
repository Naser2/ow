import React, { Component, Fragment } from 'react';
import { Header, Image } from 'semantic-ui-react';
import axios from 'axios';
// import UserAdressSearch from './usersComponents/UserAdressSearch';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import UserHeader from "/Users/techman/ow/src/usersComponents/UserHeader.js"

// import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "../components.1";


// import userBackground from "../public/assets/img/bg1.jpg";
// import userAvatar from "../public/assets/img/John.png";


export default class UserProfile extends Component {

  state ={
    adresses:[],
    aboutMe:false
    
  };
  
  displayAboutMe =()=>{
    // alert("Cliked on show About details")
    this.setState({
      aboutMe:!this.state.aboutMe
    })
  }

  componentDidMount(){
    axios.get("http://localhost:3001/users/1/addresses").then( res => {
  
      console.log(res.data);
 
      this.setState({
       addresses: res.data
       });
    })
  }

  
  render() {

    return (
      <Fragment >
        <div class="ui card" style={{float:"left"}}><div class="content">
        <UserHeader/>
        <div class="something" style={{paddingTop: "1.08571429em"}}></div>
        <div class="header">John {this.state.first_name}   | Jackson {this.state.last_name}</div>
        <div class="something" style={{paddingTop: "1.08571429em"}}></div>
        
        <div class="something" style={{'border-top':" 1px solid rgba(34,36,38,.1)"}}></div>
        <div class="meta"><span class="date">Joined in {this.state.createdAt} 2015</span></div><div class="description">John {this.state.first_name} is a musician living in Nashville Tenessee.{this.state.bio}</div>
        <div class="ui card"><div class="content" onClick={this.displayAboutMe}>
          <div class="header" >About Me</div></div>
              <div class="content" style={this.state.aboutMe ? {} : { display: 'none' }} ><div class="description">John is a violinist with 2 years experience in the wedding industry. He enjoys the outdoors and currently resides in upstate New York.{this.state.description}</div>      
          </div>
        </div>
        {/* USER DETAILS */}
       <div role="list" class="ui list">
              <div role="listitem" class="item"><i aria-hidden="true" class="marker icon"></i>
                <div class="content">
                <div class="ui heart rating" role="radiogroup" tabindex="-1"><i tabindex="0" aria-checked="true" aria-posinset="1" aria-setsize="3" class="active icon" role="radio"></i>       
                </div>

                 Favorites </div></div>
                  <div role="listitem" class="item"><i aria-hidden="true" class="home icon"></i>
                    <div class="content" style={{color:"orange"}}>Adress: 356 E 34th St New York, NY 10016{this.state.addre}</div>
                </div>
                <div role="listitem" class="item"><i aria-hidden="true" class="mail icon"></i>
                   <div class="content">
                     <a href="mailto:john@testmyskills.com">john@testmyskills.com</a>
                   </div>
                 <div class="content" style={{color:"white"}}>Cell: +1(234)-556=7654 {this.state.phone}</div>
              </div>
              <div role="listitem" class="item">
              </div>
                 <div role="listitem" class="item"><i aria-hidden="true" class="linkify icon"></i>
                  <div class="content"><a href="http:eoudboacdo.com">findmehere.com</a>
                </div>
              </div>
            </div>
       {/* UDER DETAILS END  */}
        
        </div>
  
          <div class="extra content"><a><i aria-hidden="true" class="flag icon"></i>rated these     places</a>
          </div>
        </div>
 
      <div>
     
            
          
           <Fragment>
      <div>
       
      </div>
      
        <Fragment>
          <div id="addressSearch"  style={{ float:"right",
         //  paddingLeft: "25.78571429em",
          paddingBottom: "50.78571429em",
          paddingTop: "0.08571429em",
          // paddingLeft: "55.78571429em",
          // "border-top": "none!important",
        '-webkit-box-flex': "1",
        '-ms-flex-positive': 1,
        'flex-grow': 1,
        border: "none",
        background: "0 0",
        margin: 0,
        padding:" 1em 1em",
        }}>

  
            
            
    <div class="ui basic center aligned segment" >
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
          </div>
        </Fragment>
        
      </Fragment>
     
      </div>
      
      

            
            
        
           
            </Fragment>
            
     
        )
       }
    }