import React, { Component } from 'react';
import { fourCourseList } from '../../service/jsData/home';

import './style.scss';

export default class FourCourse extends Component {
  render() {
    return (
      <div className="ry-four-course">
        {fourCourseList.map( item => {
          return (
            <div className="ry-four-course-item">
              <img src={item} alt="课程简介"></img>
            </div>
          )})}
      </div>
    )
  }
}