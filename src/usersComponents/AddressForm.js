import React, { Component } from 'react'

export default class AddressForm extends Component {
  constructor() {

    super();
    this.state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        door_number:''
    
        } 
    }

//Handles form change
handleAddressFormChange = (e) => {
    console.log(e.target.value)
    this.setState({
       [ e.target.name]: e.target.value
    })
}
//Submits new data
handleAddressFormSubmit =(e)=>{
  e.preventDefault()
  console.log("submitting FIRST Name " + this.state.first_name + "  LAST " + this.state.last_name +
  + " PHONE  " + this.state.phone + " EMAIL  " + this.state.email  +  " DOOR NUM   " + this.state.door_number)
}
  render(){
    return (
        <div class="container" style={{
          position: "relative", 
          padding: "20px 20x",   
          background: "#eee",
          'boxSizing': "border-box",
          'background-color': "#6b6b6b",
          'boxShadow': "0px 0px 15px black",
          'borderRadius': "5px"
        
        }}>
        <div className="row"  >
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                 <a className="btn big-register" style={{margin: "60px 80x"}} >Register your home</a></div>
            <div className="col-sm-4"></div>
        </div>
       
      <div className="form AddressBox " style={{ padding: "20px 200px",}}>
          <form onSubmit={this.handleAddressFormSubmit}>
          <input id="first_name"  style={{overflow: "auto",  margin: "12px " }} className="form-control" type="text" placeholder="First Name" name="first_name" value={this.state.first_name}
           onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="last_name" style={{overflow: "auto", margin: "12px",'border-collapse': "collapse",
        }} className="form-control" type="last_name" placeholder="Last Name" name="last_name"
          value={this.state.last_name}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>


          <input id="phone" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="phone" placeholder="Phone" name="phone"
          value={this.state.phone}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="email" style={{overflow: "auto", margin: "12px" ,'border-collapse': "collapse"}} className="form-control" type="text" placeholder="Email" name="email"
          value={this.state.email}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="door_number" style={{overflow: "auto",  margin: "12px",  'margin-block-end': "2.33em"}} className="form-control" type="door_number" placeholder="Door Number" name="door_number"
          value={this.state.door_number}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input class="btn btn-default btn-login" style={{

            'margin-right': "auto",
            'margin-left': "auto",
            display: "block",
            padding: "8px 16px",
            'font-size':" 16px",
            color: "#ffff",
            // 'background-color': "#3fc1c9",
            // 'background-color':"#1273de",
            'backgroundColor': "#fccb00",
            'border': "0",
            'borderRadius': "2px",
            cursor: "pointer",
            transition: "background-color. 15s ease-in",
            'marginTop': "16px"}}
            type="submit" value="Get An Address"></input>
           </form>
       </div>
   </div>
                             
    )
  }
}
