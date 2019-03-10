import React, { Component } from 'react';
import './App.css';
import {NavLink,Route,Switch,Redirect} from "react-router-dom"
import Home from "./pages/Home.js"
import Search from "./pages/Search.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </div>
    );
  }
}

export default App;
