import React, { Component } from 'react';
import {NavLink,Route,Switch,Redirect} from "react-router-dom"
import Detail from "./Detail.js"
class Index extends Component {
	constructor(props){
		super(props)
		this.props.history.listen((q)=>{
			console.log(q)
		})

	}
  render() {
    return (
      <div>
      <Switch>
      	<Route path="/home/index/:id"  component={Detail} />
      </Switch>
      <NavLink to={{
      	pathname:"/home/index/detail",
      	search:"username=xiaomimg"
      	}}>点击</NavLink>
      </div>
    )
  }
}

export default Index;