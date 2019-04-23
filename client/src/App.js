import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Form from './components/addform/Form'
import All from './components/Lists/All'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import User from  './components/Lists/User'
import Main from './components/layouts/Landing'
import UpdateForm from './components/addform/UpdateForm'
class App extends Component {
  render() {
    return (

        <Router>
          <div className="App">
            <Route path='/' component ={Navbar}></Route>
            <Route exact path='/' component ={Main}></Route>
            <Route exact path='/all' component={All}></Route>
            <Route exact path='/form' component={Form}></Route>
            <Route exact path='/user/:email' component={User}></Route>
            <Route exact path='/update/:email' component={UpdateForm}></Route>
            <Footer/>
          </div>
        </Router>
    );
  }
}
export default App;
