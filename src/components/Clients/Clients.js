import React from 'react'
import {Component} from 'react'

class Clients extends Component{
  render(){
    const clients=[{
      id:'4554543435',
      first_name:'Ricko',
      last_name: 'Semba',
      email:'rickosemba@gmail.com',
      phone:'+1(646)456-4523',
      address: "54 W 31st St, New York, NY 10001"
    },
    {
      id:'43333435',
      first_name:'Samira',
      last_name: 'Johnson',
      email:'samiraa@gmail.com',
      phone:'+1(534)487-9872',
      address: "765 E 67st St, New York, NY 10024"
    },
    {
      id:'22245777',
      first_name:'Aimee',
      last_name: 'LeBoeuf',
      email:'aimee@gmail.com',
      phone:'+1(234)692-4573',
      address: "83 Brookdale Ave, Brooklyn, NY 10220"
    }]
    if(clients){
    return  (
      <div className="row">
        <div className="col-md-6">
        <h2> <i className="fas fa-users"/> clients{' '}</h2>
        </div>
      </div>)
    }else {
       return <h1>Loadinn Clients</h1> 
    }
 
  }
  
}

export default Clients