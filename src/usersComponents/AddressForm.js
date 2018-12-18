import React, { Component } from 'react'

export default class AddressForm extends Component {
  render() {
    return (
        <div class="container" style={{
          position: "relative", 
          padding: "20px 20x",   
          background: "#eee",
        'box-sizing': "border-box",
        // width:"324", height:"322",
        // padding: "10 10"
      ' background-color': "#6b6b6b",
      // ' padding': "80px 80px",
      ' box-shadow': "0px 0px 15px black",
      ' border-radius': "5px"
        
        }}>
        <div class="row"  >
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                 <a class="btn big-register" style={{margin: "60px 80x"}}data-toggle="modal" href="javascript:void(0)" onclick="openRegisterModal();">Register your home</a></div>
            <div class="col-sm-4"></div>
        </div>
       
      <div class="form loginBox " style={{ padding: "50px 300px",}}>
          <form method="post" action="/login" accept-charset="UTF-8">
          <input id="first_name"  style={{overflow: "auto",  margin: "12px " }} class="form-control" type="text" placeholder="First Name" name="first_name"></input>

          <input id="last_name"  style={{overflow: "auto", margin: "12px",'border-collapse': "collapse",
       
        //   'margin-block-end': "1.33em",
        }} class="form-control" type="last_name" placeholder="Last Name" name="last_name"></input>

          <input id="email"  style={{overflow: "auto", margin: "12px" ,'border-collapse': "collapse"}} class="form-control" type="text" placeholder="Email" name="email"></input>

          <input id="phone"  style={{overflow: "auto", margin: "12px", 'border-collapse': "collapse"}} class="form-control" type="phone" placeholder="Phone" name="phone"></input>

          <input id="door_number"   style={{overflow: "auto",  margin: "12px",  'margin-block-end': "2.33em"}} class="form-control" type="door_number" placeholder="Door Number" name="phone"></input>

          <input class="btn btn-default btn-login"  style={{

            'margin-right': "auto",
            'margin-left': "auto",
            display: "block",
            padding: "8px 16px",
            'font-size':" 16px",
            color: "#fff",
            // 'background-color': "#3fc1c9",
            'background-color':"#1273de",

            'border': "0",
            'border-radius': "2px",
            cursor: "pointer",
            transition: "background-color. 15s ease-in",
            'margin-top': "16px",
            
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
    }}type="button" value="Get Address" onclick="loginAjax()" ></input>
          </form>
      </div>
</div>
                             
    )
  }
}
