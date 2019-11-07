import React, { Component } from 'react';
import { Carousel } from 'antd';

import './style.scss';

export default class DetailStudentWork extends Component {
  render(){

    const { studentWorkList } = this.props;

    return (
      <div className="detail-student-work-carousel">
        <div className="title">
          <div />
          <h4>学员作品展示</h4>
        </div>
        <div className="content">
          <Carousel autoplay autoplaySpeed={5000}>
            {
              studentWorkList.map((list, index) => {
                return (
                  <div className="one-page" id={index}>
                  {
                    <div className="one-row">
                      {
                        list.slice(0,4).map((item, index) => (
                          <div className="one-picture">
                            <img src={item} id={index}/>
                          </div>
                        ))
                      }
                    </div>
                  }
                  {
                    <div className="one-row">
                      {
                        list.slice(4,8).map((item, index) => (
                          <div className="one-picture">
                            <img src={item} id={index}/>
                          </div>
                        ))
                      }
                    </div>
                  }
                  {
                    <div className="one-row">
                      {
                        list.slice(8,12).map((item, index) => (
                          <div className="one-picture">
                            <img src={item} id={index}/>
                          </div>
                        ))
                      }
                    </div>
                  }
                  
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    )
  }
}