import React, { Component, Fragment } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalSearch extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    console.log("MODAL PROPS:", this.props, "FORMATTED:", this.props.formatted)
    const {address} = this.props


    return (
    <Fragment>
        <Fragment>
          <Button style={{
             'background-color':'orange',
              color:'white',
              float:'left',
              marginLeft:'2.5px'
          }} onClick={this.show(true)}>View
           <i class="fas fa-arrow-circle-right" style={{marginLeft:'6px'}}></i>
          </Button>
        </Fragment>

     
       
        {/* <Button onClick={this.show('inverted')}>Inverted</Button>
        <Button onClick={this.show('blurring')}>Blurring</Button> */}
        {/* width: 850px;
    margin: 0; */}

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
     
          <Modal.Header>
         <div class="makeThisSearchReusable"
          style={{
         
          }}
          >
          <div class="ui basic center aligned segment"  >
            
              <div class="ui action left icon input"
                style={{
                  
                  // 'minHeight': "1em",
                  // 'boxShadow': "0 0 0 0 rgba(34,36,38,.15) inset",
                  // outline: "0",
                  // border: "none",
                  // verticalAlign: "baseline",
                  // // background: "#e0e1e2 none",
                  // fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",

                  // 'fontSize': "2rem",//size

                  // fontWeight: "700",
                  // lineHeight: "2em",
                  // fontStyle: "normal",
                  // // not useful it seems
                  // textAlign: "center",
                  // textDecoration: "none",

                }}
              >

                <input type="text" placeholder="Find places ..."
                  onChange={this.handleSearchChange}
                  name="query"
                  value={this.state.query}
                  style={{
        
                   'border-radius': '500rem',
                   width:'300px', //width
                   height:'50px',
                   borderRightColor: "transparent!important",
                   paddingLeft: "1.67142857em!important",
                  // paddingRight: "1em!important",
                    boxShadow: "none",
                    margin: 0,
                    flex: "1 0 auto",
                    outline: 0,
                    textAlign: "left",
                    lineHeight: "2em",
                    fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                    background: "#fff",
                    border: "1px solid rgba(34,36,38,.15)",
                    color: "rgba(0,0,0,.87)",
                    // maxWidth: "100%",
                    overflow: "visible"
                  }}
                />
                <button class="ui blue button"
                  onClick={this.handleSearchBar}
                  style={{
                    // float: "left ",
                  
                    // // borderRadius: "0 .28571429rem .28571429rem 0",
                    // backgroundColor: "#2185d0",
                    // color: "#fff",
                    // textShadow: " none",
                    // backgroundImage: "none",
                    // padding: ".98571429em 1.6em .98571429em", // this affects the search button pading top bottom lenght(right & left)  ex: top val, length bottom val

                    // // ALL BUTTONS - .ui.button 
                    // 'minHeight': "1em",
                    // 'boxShadow': "0 0 0 0 rgba(34,36,38,.15) inset",
                    // outline: "0",
                    // border: "none",
                    // verticalAlign: "baseline",
                    // fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                    // fontSize: "100%",
                    // fontWeight: "800",
                    // lineHeight: "2em",
                    // // lineHeight: "8em",
                    // fontStyle: "bold",
                    // // not useful it seems
                    // textAlign: "center",
                    // textDecoration: "none",
                    // //Newly Added 
                    // textRendering: "auto",
                    // // color: "initial", 
                    // letterSpacing: "normal",
                    // wordSpacing: "normal",
                    // textIndent: "0px",
                    // font: " 900 16px system-ui", 
                    // //Not Important
                    // left: "0",
                    // // position: "absolute",
                    // 'text-align': "center",
                    // top: "50%",
                    // ' margin-top': " -.5em",
                     'borderTopRightRadius': '2.4571429rem',
                     'borderBottomRightRadius':'2.4571429rem',
                  }}
                > Search
                  </button>
              </div>
            </div>
          </div>


{/*           
          <div class="ui grid">
            <div class="eight wide column">
             <div class="ui category search">
             
                  <div class="ui icon input">     
                    <input type="text" value="" tabindex="0" class="prompt" autoComplete="off"/>
                     <i aria-hidden="true" class="search icon"></i>
                  </div>
              
                  <div class="results transition">
                     <div class="message empty"></div>
                     <div class="header">No results found.</div>
                  </div>
                
             </div>
          </div>
        </div> */}
        
        
          

          
          </Modal.Header>
          <Modal.Content image>
            <Image wrapped size='large' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>{address}  <button class="ui primary button"
                style={{float:'right', width:'70px'}}>Save
               </button></Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Go the location ?  <button class="ui button" style={{'background-color': '#005abe', color:'white', textAlign:'center',
              fontSize: "bold",
               }}
                >GO<i class="material-icons" style={{"font-size":'48px',color:"white"}}>directions</i>
               </button></p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>


          {/* <button class="ui button"
                style={{ backgroundColor:'white',
                height:'4rem', 
                width: '35rem', marginTop:'0.3rem'}}>     
           </button> */}

           {/* <button class="ui button"
                style={{ backgroundColor:'rgb(232,232,232)',
                height:'4rem', 
                width: '35rem',
                // marginTop:'0.1.6rem'
                float:"left"
                }}>
            </button>      */}

              <button class="ui pink button" 
                  style={{
                    //  backgroundColor:'rgb(44,184x,75)', 
                  color:'white',
                  float:"left",
                  marginRight:'5px'
                  }}>Group inbox <i class="material-icons" style={{"font-size":"18px", color:"white", float:'right', paddingLeft:'5px'}}>mail</i>
              </button>

                    




            <Button  onClick={this.close} // add funtion to display full as size Map
             color='orange'
             >
             View on large Map
            </Button>

            <button class="ui rgb(44,184,75) button"  onClick={this.close}
                  style={{ backgroundColor:'rgb(44,184,75)', 
                  labelPosition:'right',
                  content:"Share",
                  color:'white',
                  }}> Share
                  <i class="material-icons" style={{"font-size":"18px", color:"white", float:'right', paddingLeft:'5px'}}>share</i>
              </button>


          </Modal.Actions>
        </Modal>
     </Fragment>
    )
  }
}

export default ModalSearch;