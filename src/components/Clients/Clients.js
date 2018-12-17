
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

export default class Clients extends Component {
  render() {
    const clients = [
      {
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
    }
  ];

    if(clients){
      return(
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>{' '}
              <i className="fas fa-users" /> Clients{' '}
            </h2>
          </div>
          <div className="col-md-6" />
        </div>
  
        <table className="table table-stripped">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th />
            </tr>
          </thead>
          <tbody>
  
            { clients.map( client => {
              console.log("Hello CLIENTTTT:", client)
             return <tr key={client.id}>
              <td>{client.first_name} {client.last_name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
              <td>
                <Link to={`/clients/${client.id}`} className="btn btn-secondary btn-sm">
                <i className="fas fa-arrow-circle-right"></i>  Details 
                </Link>
              </td>
            </tr>
                  
            })}
            
          </tbody>
        </table>
      </div>
      );
   } else {
     return <h1>Loadinn Clients</h1> 
  }
 }
}