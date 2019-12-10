import React, { Component } from "react";
import { fourCourseList } from "../../service/jsData/home";

import "./style.scss";

export default class FourCourse extends Component {
  render() {
    return (
      <div className="ry-four-course">
        {fourCourseList.map(item => {
          return (
            <div className="coverage">
              <div className="ry-four-course-item">
                <img src={item} alt="课程简介"></img>
              </div>
              <div className="revolver revolver-left" />
              <div className="revolver revolver-bottom" />
              <div className="revolver revolver-right" />
              <div className="revolver revolver-top" />
            </div>
          );
        })}
      </div>
    );
  }
}
