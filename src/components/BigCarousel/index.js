import React, { Component } from 'react';
import { Carousel } from 'antd';

import './style.scss';

export default class BigCarousel extends Component{
  render(){

    const { posterList } = this.props;

    return (
      <div className="bigCarousel">
        <Carousel autoplay autoplaySpeed={5000} >
            {posterList.map(item => {
              return <img src={item} alt={"如一设计手绘海报"} />;
            })}
          </Carousel>
      </div>
    )
  }
}