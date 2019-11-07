import React, { Component } from 'react';
import { courseList } from '../../service/jsData/courses';

import './style.scss';

export default class CourseList extends Component {


  onClick = name => {
    window.location.href += '/' + name;
  }

  render(){
    const { page_name } = this.props;
    const imgList = courseList[page_name];
    
    return (
      <div className={"ry-course-list page_name_" + page_name}>
        <div className="one-line">
          {imgList.slice(0,3).map(item => {
            return (
              <div className="course-item" onClick={()=>{this.onClick(item.name)}}>
                <img src={item.url}></img>
              </div>
            )
          })}
        </div>
        <div className="one-line">
          {imgList.slice(3,6).map(item => {
            return (
              <div className="course-item" onClick={()=>{this.onClick(item.name)}}>
                <img src={item.url}></img>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}