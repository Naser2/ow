import React, { Component } from 'react';
import axios from 'axios';
import SmartInput from 'react-phone-number-input/smart-input';
import 'react-responsive-ui/style.css';
import PhoneInput from 'react-phone-number-input/react-responsive-ui'
import UserProfile from './UserProfile';
// import PhoneInput from 'react-phone-number-input/react-responsive-ui';
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input'
// import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'
const BASE_URL = "http://localhost:3001"


export default class AddressForm extends Component {
  constructor() {

    super();
    this.state = {
        user_id: 1,
        door_number:'',
        cardinal: '',
        street:'',
        neighborhood:'',
        lat: '',
        lng: '',
        city:'',
        state:'',
        postal_code:'',
        country:'',
    }
        }
   
      getAdditionalGeoData = () => {
        let cardinal 
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=
       getKey()`
        ).then(res => {
          
          const data = res.data;
          console.log("IN AXIOS:", data)
          const street  = data.results[0].address_components[1].short_name;
          const neighborbhood = data.results[7].address_components[0].short_name
          const city  = data.results[0].address_components[2].long_name;
          const state = data.results[0].address_components[5].long_name;
          const postal_code = data.results[0].address_components[7].long_name;
          const country = data.results[0].address_components[6].short_name;
          const lat =  this.state.lat
          const lng = this.state.lng 
          console.log("STREET:", street)
          console.log("NEIGHBORHOOD", neighborbhood)
          console.log("CITY:", city)
          console.log("STATE:", state)
          console.log("POSTAL CODE:", postal_code)
          console.log("COUNTRY:", country)  
          console.log("Lat in AXIOS:", lat)  
          this.setState({
            street: street,
            cardinal: cardinal,
            lat: lat,
            lng: lng,
            neighborhood: neighborbhood,
            city:city,
            state:state,
            postal_code:postal_code,
            country:country
               });
        })
      } 
  

      getRegistrantLocation = () => { 
        navigator.geolocation.getCurrentPosition(position => {   
            const lat = { latitude: position.coords.latitude}.latitude
            const lng =  { longitude: position.coords.longitude}.longitude 
            this.setState( {
            lat: lat,
            lng: lng 
          }, ()=> this.getAdditionalGeoData()) 
        }    
      )
      
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
      console.log("SUBMITTING NEW ADDRESSE:", this.state )

      fetch(`${BASE_URL}/addresses`,{
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json"
        },
        body: JSON.stringify(this.state )
      }).then(res => {
        return res.json()
      })
      .then(res => console.log(res))   
    }
    componentDidMount() {
      this.getRegistrantLocation() 
      
    }



  render(){
    
    console.log("AT RENDER:", this.state)
    return (
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
                 <a className="btn big-register" style={{margin: "60px 80x"}} >Register your home</a></div>
            <div className="col-sm-4"></div>
        </div>
       
      <div className="form AddressBox " style={{ padding: "20px 200px",}}>
          <form onSubmit={this.handleAddressFormSubmit} >

          <input id="street" style={{overflow: "auto", margin: "12px",'borderCollapse': "collapse",
        }} className="form-control" type="street" placeholder="Street" name="street"
          value={this.state.street}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input id="neighborhood" style={{overflow: "auto", margin: "12px", 'borderCollapse': "collapse"}} className="form-control" type="neighborhood" placeholder="Phone" name="neighborhood"
          value={this.state.neighborhood}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input> 
          

          <input id="city" style={{overflow: "auto", margin: "12px",'borderCollapse': "collapse",
        }} className="form-control" type="city" placeholder="City" name="city"
          value={this.state.city}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>
        
        <input id="state" style={{overflow: "auto", margin: "12px",'borderCollapse': "collapse",
        }} className="form-control" type="state" placeholder="State" name="state"
          value={this.state.state}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>
         {/* <PhoneInput
         inputComponent={ SmartInput }
         placeholder="Enter phone number"
         value={ this.state.value }
         onChange={ value => this.setState({ value }) }
          /> */}

      

          <input id="door_number" style={{overflow: "auto",  margin: "12px",  'marginBlockEnd': "2.33em"}} className="form-control" type="door_number" placeholder="Door Number" name="door_number"
          value={this.state.door_number}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

           <input id="country" style={{overflow: "auto", margin: "12px", 'borderCollapse': "collapse",
        }} className="form-control" type="country" placeholder="Country" name="country"
          value={this.state.country}
          onChange={ (e)=> this.handleAddressFormChange(e) }></input>

          <input className="btn btn-default btn-login" style={{

            'marginRight': "auto",
            'marginLeft': "auto",
            display: "block",
            padding: "8px 16px",
            'fontSize':" 16px",
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
