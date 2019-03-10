import React, { Component } from 'react';
class Test extends Component {

  render() {
  	console.log(this.props)
    return (
      <div>
      	{React.Children.map(this.props.children,(item)=>{
      		return <div>{item}</div>
      	})}
        我是测试页面
      </div>
    );
  }
}

export default Test;