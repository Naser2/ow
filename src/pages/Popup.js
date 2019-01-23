import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const FirstName = (props) => (
  <Popup
    trigger={ <input type="text" placeholder="First name" name={props.name} value={props.value} onChange={props.handleFirstName} /> }
    content={<Button color='green' content='Enter first name'/>}
    position='top right'
  />
)

const LastName = (props) => (
  <Popup
    trigger={ <input type="text" placeholder="Last name"
     name={props.name}
     value={props.value}
     onChange={props.handleLastName}/> }
    content={<Button color='green' content='Enter last name' />}
    position='top left'
  />
)

const Email = (props) => (
  <Popup
    trigger={ <input type="text" placeholder="Email" 
    name={props.name} 
    value={props.value}
     onChange={props.handleEmail}/> }
    content={<Button color='green' content='Enter your email' />}
    position='top left'
  />
)

const Phone = (props) => (
  <Popup
    trigger={ <input type="text" 
    placeholder="Phone"
    name={props.name}
    value={props.value}
    onBlur={props.handlePhone}
    onChange={props.handlePhone} />}
    content= {<Button color='gray' content='Enter phone' />}
    position='top left'
 />
)

const Password = (props) => (
  <Popup 
    trigger={ <input type="password" placeholder="Password"
    name="password"  
    value={props.password}  
    onChange={props.handlePassword}/>}
    content= {<Button color='gray' content='Enter password' />}
    position='top right'
  />
)
const PasswordConfirmation = (props) => (
  <Popup 
    trigger={ <input type="password" placeholder="Password"
    name="password_confirmation"  
    value={props.passwordConfirmation}  
    onChange={props.handlePasswordConfirmation}/>}
    content={props.button}
    position='top right'
  />
)


export {FirstName}
export {LastName}
export {Email}
export {Phone}
export {Password}
export {PasswordConfirmation}



// import { Button, Grid, Header, Popup } from 'semantic-ui-react'

// const timeoutLength = 2500

// class PopupExampleControlled extends React.Component {
//   state = { isOpen: false }

//   handleOpen = () => {
//     this.setState({ isOpen: true })

//     this.timeout = setTimeout(() => {
//       this.setState({ isOpen: false })
//     }, timeoutLength)
//   }

//   handleClose = () => {
//     this.setState({ isOpen: false })
//     clearTimeout(this.timeout)
//   }

//   render() {
//     return (
//       <Grid>
//         <Grid.Column width={8}>
//           <Popup
//             trigger={<Button content='Open controlled popup' />}
//             content={`This message will self-destruct in ${timeoutLength / 1000} seconds!`}
//             on='click'
//             open={this.state.isOpen}
//             onClose={this.handleClose}
//             onOpen={this.handleOpen}
//             position='top right'
//           />
//         </Grid.Column>
//         <Grid.Column width={8}>
//           <Header>State</Header>
//           <pre>{JSON.stringify(this.state, null, 2)}</pre>
//         </Grid.Column>
//       </Grid>
//     )
//   }
// }

// export default PopupExampleControlled
