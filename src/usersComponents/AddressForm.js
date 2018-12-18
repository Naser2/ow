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


//Sets the firstName state value to the first_name field's value when the onChange event is fired
handleAddressFormChange = (e) => {
    console.log(e.target.value)
    this.setState({
       [ e.target.name]: e.target.value
    })
}

handleAddressFormSubmit =()=>{
  console.log("submitting New Addresssss")
}
  render(){
    return (
        <div class="container" style={{
          position: "relative", 
          padding: "20px 20x",   
          background: "#eee",
        'boxSizing': "border-box",
        // width:"324", height:"322",
        // padding: "10 10"
      ' background-color': "#6b6b6b",
      // ' padding': "80px 80px",
      '  boxShadow': "0px 0px 15px black",
      ' borderRadius': "5px"
        
        }}>
        <div className="row"  >
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                 <a className="btn big-register" style={{margin: "60px 80x"}} >Register your home</a></div>
            <div className="col-sm-4"></div>
        </div>
       
      <div className="form AddressBox " style={{ padding: "20px 200px",}}>
          <form >
          <input id="first_name"  style={{overflow: "auto",  margin: "12px " }} className="form-control" type="text" placeholder="First Name" name="first_name" value={this.state.first_name}
           onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="last_name"  style={{overflow: "auto", margin: "12px",'border-collapse': "collapse",
        //   'margin-block-end': "1.33em",
        }} className="form-control" type="last_name" placeholder="Last Name" name="last_name"
        value={this.state.last_name}
           onChange={ (e)=> this.handleAddressFormChange(e) }></input>


          <input id="phone"  style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="phone" placeholder="Phone" name="phone"
          value={this.state.phone}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="email"  style={{overflow: "auto", margin: "12px" ,'border-collapse': "collapse"}} className="form-control" type="text" placeholder="Email" name="email"
          value={this.state.email}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="door_number"   style={{overflow: "auto",  margin: "12px",  'margin-block-end': "2.33em"}} className="form-control" type="door_number" placeholder="Door Number" name="door_number"
          value={this.state.door_number}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input class="btn btn-default btn-login"  style={{

            'margin-right': "auto",
            'margin-left': "auto",
            display: "block",
            padding: "8px 16px",
            'font-size':" 16px",
            color: "#fff",
            // 'background-color': "#3fc1c9",
            // 'background-color':"#1273de",
            'backgroundColor': "#fccb00",

            'border': "0",
            'borderRadius': "2px",
            cursor: "pointer",
            transition: "background-color. 15s ease-in",
            'marginTop': "16px",
            
          //   'line-height': "46px",
          //   overflow: "auto",  'font-weight': "bold",' border-collapse': "collapse",
          //   'margin-top': "8",
          //   alignSelf:'center',
          //  ' margin-bottom': "8",
          //   padding:"8",
          //   display: "block",
          //   'box-shadow':" 0 2px 2px 0 rgba(0, 0, 0, 0.2)",
          //   'max-width': "305px",

  //   'margin-block-start': "1.33em",
  //   'margin-block-end': "1.33em",
  //   'margin-inline-start': "0px",
  //  ' margin-inline-end': "0px",
    }} type="submit" value="Get Address" onclick={this.handleAddressFormSubmit}></input>
          </form>
      </div>
</div>
                             
    )
  }
}
