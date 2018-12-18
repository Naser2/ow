import React, { Component } from 'react'

export default class SignupForm extends Component {

  state ={
    first_name: '',
    last_name:'',
    email:'',
    phone:'',
    password: ''
  }

//Handle Input Change
  handleFormChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
     })
  }

//Submits New User Data
handleSubmit =(e)=>{
  e.preventDefault()
  console.log("submitting Name " + this.state.first_name + "  LAST " + this.state.last_name +
  " Phone  " + this.state.phone  +  " PW   " + this.state.password)
}

  render() {
    return (
      <div class="container" style={{
        position: "relative", 
        padding: "20px 20x",   
        background: "#1273de",
        'boxSizing': "border-box",
        'background-color': "white",
        'boxShadow': "0px 0px 15px black",
        'borderRadius': "5px"
      
      }}>
      <div className="row"  >
          <div className="col-sm-4"></div>
            <a className="btn big-register" style={{margin: "60px 80x"}} >Signup</a>
         </div>

     
    <div className="form AddressBox " style={{ padding: "20px 200px",}}>
        <form onSubmit={this.handleSubmit }>
        <input id="first_name"  style={{overflow: "auto",  margin: "12px " }} className="form-control" type="text" placeholder="First Name" name="first_name" value={this.state.first_name}
         onChange={ (e)=> this.handleFormChange(e) }></input>

        <input id="last_name" style={{overflow: "auto", margin: "12px",'border-collapse': "collapse",
      }} className="form-control" type="last_name" placeholder="Last Name" name="last_name"
        value={this.state.last_name}
        onChange={ (e)=> this.handleFormChange(e) }></input>

        <input id="phone" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="phone" placeholder="Phone" name="phone"
        value={this.state.phone}
        onChange={ (e)=> this.handleFormChange(e) }></input>
        
        <input id="password" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="password" placeholder="Password" name="password"
        value={this.state.password}
        onChange={ (e)=> this.handleFormChange(e) }></input>

        <input class="btn btn-default btn-login" style={{
          'margin-right': "auto",
          'margin-left': "auto",
          display: "block",
          padding: "8px 16px",
          'font-size':" 16px",
          color: "#ffff",
          'backgroundColor': "#fccb00",
          'border': "0",
          'borderRadius': "2px",
          cursor: "pointer",
          transition: "background-color. 15s ease-in",
          'marginTop': "16px"}}
          type="submit" value="Sign"></input>
         </form>
     </div>
 </div>

    )
  }
}