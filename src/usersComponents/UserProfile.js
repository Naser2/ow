import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'
import axios from 'axios'

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

    const HeaderExampleImage = () => (
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
      </Header>
    )
    return (
      <div>
        User Profile
        {HeaderExampleImage()}
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
    )
  }
}
