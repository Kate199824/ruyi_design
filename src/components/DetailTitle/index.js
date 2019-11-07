import React, { Component } from 'react';

import './style.scss';

export default class DetailTitle extends Component {
  render(){
    const { imgUrl, codeUrl, coursePrice, courseNumber, detail } = this.props;

    return (
      <div className="ry-detail-title">
        <div className="left">
          <img src={imgUrl} alt={detail}></img>
        </div>
        <div className="right">
          <h2>{detail}</h2>
          <p>学费: {coursePrice}元</p>
          <p>课时: {courseNumber}课时</p>
          <button>点击在线咨询</button>
          <div>
           <img src={codeUrl} alt="拨打手机 136-7514-8010"></img>
          </div>
        </div>
      </div>
    )
  }
}