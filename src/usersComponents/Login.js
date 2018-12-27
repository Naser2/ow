import React, { Component, Fragment } from 'react'

export default class SignupForm extends Component {

  state ={
    email:'',
    password: ''
  }

  //Handle Change
 handleLoginChange = (e) => {
     this.setState({
      [ e.target.name]: e.target.value
     })
  }

 //Login data
 handleSubmit =(e)=>{
  e.preventDefault()
  console.log("LOGIN EMAIL " + this.state.email  +
  " PASSWORD "  + this.state.password)
}

  render() {
    return (
      <Fragment>
      <h1> Hello LOGIN</h1> 


      {/* <form class="ui form"><div class="field">
      
      
      
      </form> */}
      <div id="loginCardContainer"
       style={{ position: "relative",
                width: "100%",
                minHeight: "1px",
                // paddingRight: "15px",
                // paddingLeft: "15px",
                backgroundColor: "orange" ,
                display: "flex",
    'flex-wrap': "wrap",
    height: "100px",
    widht: "50px",
  //  ' margin-right': "-15px",
  //  ' margin-left': "-15px",
// }
//                 'margin-left': "auto!important",
//                 'margin-right': "auto!important"     
}}>




<form class="ui small form" >
<div class="equal width fields"><div class="field"><label>First name</label><input placeholder="First name"/></div>

<div class="field"><label>Last name</label><input placeholder="Last name"/></div>
<div class="field"></div><label>First name</label><div class="ui input"><input type="text" placeholder="First name"/></div>

</div><div class="field"><div class="ui checkbox"><input type="checkbox" class="hidden" readonly="" tabindex="0"/><label>I agree to the Terms and Conditions</label>



</div></div><button type="submit" class="ui button">Submit</button>

<div class="ui grid"><div class="eight wide column"><button class="ui primary button">A button that can be focused</button></div><div class="eight wide column"><button class="ui button">Set focused</button></div></div>
</form>








</div>
    
      </Fragment>
    //   <div class="container" style={{position: "relative", padding: "20px 20x",background: "#1273de",
    //     'boxSizing': "border-box",
    //     'background-color': "white",
    //     'boxShadow': "0px 0px 15px black",
    //     'borderRadius': "5px"}}>

    //   <div className="row"  >
    //       <div className="col-sm-4"></div>
    //         <a className="btn big-register" style={{margin: "60px 80x"}} >Login</a>
    //      </div>

    //      <div className="form AddressBox " style={{ padding: "20px 200px",}}>
    //     <form onSubmit={this.handleSubmit }>

    //     <input id="phone" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="email" placeholder="Email" name="email"
    //     value={this.state.phone}
    //     onChange={ (e)=> this.handleLoginChange(e) }></input>
        
    //     <input id="password" style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} className="form-control" type="password" placeholder="Password" name="password"
    //     value={this.state.password}
    //     onChange={ (e)=> this.handleLoginChange(e) }></input>
    //     <input class="btn btn-default btn-login"
    //      style={{
    //       'margin-right': "auto",
    //       'margin-left': "auto",
    //       display: "block",
    //       padding: "8px 16px",
    //       'font-size':" 16px",
    //       color: "#ffff",
    //       'backgroundColor': "#fccb00",
    //       'border': "0",
    //       'borderRadius': "2px",
    //       cursor: "pointer",
    //       transition: "background-color. 15s ease-in",
    //       'marginTop': "16px" }}
    //       type="submit" value="Sign" ></input>
    //      </form>
    // </div>
  //  </div>

    )
  }
}