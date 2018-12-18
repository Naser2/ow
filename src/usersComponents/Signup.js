import React, { Component } from 'react'

export default class SignupForm extends Component {

  state ={
    first_name: '',
    last_name:'',
    phone:'',
    password: ''
  }

//Handle Input Change
  handleChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
     })
  }

  //Submits New User Data
handleAddressFormSubmit =(e)=>{
  e.preventDefault()
  console.log("submitting Name " + this.state.first_name + "  LAST " + this.state.last_name +
  " EMAIL  " + this.state.email  +  " PW   " + this.state.password)
}

  render() {
    return (
      <div className="ui grid container middle aligned" >
      <div className="column">
      <div className="ui segment top attached"> Sign Up Page</div>
        <form className="ui form segment top attached green" onSubmit={(e)=>this.props.handleSubmit(e,this.state)}>
          <div className="field ui left icon input fluid">
          <input type="text" name="name" placeholder="name" value={this.state.name}  onChange={this.handleChange}/>
          <br />
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
            <i className="users icon"></i>
          </div>
          <div className="field ui left icon input fluid">
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />  
            <i className="key icon"></i>
          </div>
          <button className="ui button fluid positive" type="submit" value="Login"style={{background: '#0084cc'}}>Submit</button>
        </form>  
        <div className="ui segment bottom attached"> <a >Welcome  </a>.</div>
      </div>
    </div>
  
  

    )
  }
}