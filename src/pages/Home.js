import React, { Component } from 'react';
import {NavLink,Route,Switch,Redirect} from "react-router-dom"
import Video from "./video.js"
import Sub from "./Sub.js"
import Personal from "./Personal.js"
import Index from "./Index.js"
import Test from "./test.js"
import Search from "./Search.js"
class Home extends Component {
  render() {
  	console.log(this.props)
    return (
      <div>
       	<div>
	      	<NavLink to="/search">搜索</NavLink>
	      	<Test><Search msg={1}/></Test>


	      </div>
	      	<Switch>
		      <Route path="/home/index" component={Index}/>
		      <Route path="/home/video" component={Video}/>
		      <Route path="/home/sub" component={Sub}/>
		      <Route path="/home/personal" component={Personal} />
		      <Redirect from="/" to="/home/index/detail"/>
	      </Switch>

      		<NavLink to="/home/index" >首页</NavLink>
	        <NavLink to="/home/video">视频</NavLink>
	        <NavLink to="/home/sub">订阅</NavLink>
	        <NavLink to="/home/personal">个人中心</NavLink>

	      	
	       
      </div>
    );
  }
}

export default Home;