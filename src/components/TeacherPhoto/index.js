import React, { Component } from "react";
import "./style.scss";

export default class TeacherPhoto extends Component {
  render() {
    const {
      name = "边文博",
      location = "如一画室",
      intros = ["xxxxx", "ssssss", "sssss", "wwwwww", "dddddd", "ssssss"],
      imgUrl = "http://ruyidesign-home.oss-cn-beijing.aliyuncs.com/fourCourse/1.png"
    } = this.props;

    return (
      <div className="teacher-photo">
        <div className="photo">
          <img src={imgUrl} />
        </div>
        <div className="small-hover">
          <p>{name}</p>
        </div>
        <div className="big-hover">
          <div className="up">
            <h4>{name}</h4>
            <h4>{location}</h4>
          </div>
          {intros.map((intro, index) => (
            <p id={index}>{intro}</p>
          ))}
        </div>
      </div>
    );
  }
}
