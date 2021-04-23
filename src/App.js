import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserForm from './components/Auth/Registration';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path= {"/"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/registration"} component={UserForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}


