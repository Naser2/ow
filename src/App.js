import React, { Component } from 'react';
import Container from './Container'
import AddressForm from './components/AddressForm'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
            <Router>
             <Switch>
               <Route exact path="/map" component={Container} />
               <Route exact path="/newAddress" component={AddressForm} />
             </Switch>
           </Router>
           
        </header>
      </div>
    );
  }
}

export default App;
