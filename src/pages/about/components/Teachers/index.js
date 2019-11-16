import React, { Component } from "react";
import { Carousel } from "antd";
import TeacherPhoto from "../../../../components/TeacherPhoto";
import { teacherList } from "../../../../service/jsData/about";

import "./style.scss";

export default class Teachers extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onNext = () => {
    this.myRef.next();
  };

  onPrev = () => {
    this.myRef.prev();
  };

  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      dots: false
    };
    return (
      <div className="about-teachers">
        <h2>如一教师团队</h2>
        <div className="content">
          <Carousel ref={ref => (this.myRef = ref)} {...settings}>
            {teacherList.map((item, index) => {
              return (
                <div className="one-item">
                  <TeacherPhoto />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="prev" onClick={this.onPrev} />
        <div className="next" onClick={this.onNext} />
      </div>
    );
  }
}
