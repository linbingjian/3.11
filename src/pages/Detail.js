import React, { Component } from 'react';
class Detail extends Component {

  render() {
    console.log(this.props.match.params.id,this.props.location.search)
    return (
      <div>
        详情页
      </div>
    );
  }
}

export default Detail;