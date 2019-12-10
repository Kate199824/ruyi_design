import React, { Component } from "react";
import { Carousel, Icon } from "antd";

import "./style.scss";

function PopUp(props) {
  const { imgUrl, handleClick } = props;
  return (
    <div className="pop-up">
      <Icon
        className="icon"
        type="close-circle"
        theme="filled"
        style={{ fontSize: "30px", color: "#3f2d57e1" }}
        onClick={handleClick}
      />
      <img src={imgUrl} />
    </div>
  );
}

export default class DetailStudentWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      imgUrl: ""
    };
  }

  showPopUp = imgUrl => {
    console.log("SHOW");
    this.setState({
      imgUrl,
      showPopUp: true
    });
  };

  hidePopUp = () => {
    console.log("HIDE");
    this.setState({
      imgUrl: "",
      showPopUp: false
    });
  };

  render() {
    const { studentWorkList } = this.props;
    const { showPopUp, imgUrl } = this.state;
    return (
      <div className="detail-student-work-carousel">
        <div className="title">
          <div />
          <h4>学员作品展示</h4>
        </div>
        <div className="content">
          <Carousel autoplay autoplaySpeed={5000}>
            {studentWorkList.map((list, index) => {
              return (
                <div className="one-page" id={index}>
                  {
                    <div className="one-row">
                      {list.slice(0, 4).map((item, index) => (
                        <div
                          className="one-picture"
                          onClick={() => {
                            this.showPopUp(item);
                          }}
                        >
                          <img src={item} id={index} />
                        </div>
                      ))}
                    </div>
                  }
                  {
                    <div className="one-row">
                      {list.slice(4, 8).map((item, index) => (
                        <div
                          className="one-picture"
                          onClick={() => {
                            this.showPopUp(item);
                          }}
                        >
                          <img src={item} id={index} />
                        </div>
                      ))}
                    </div>
                  }
                  {
                    <div className="one-row">
                      {list.slice(8, 12).map((item, index) => (
                        <div
                          className="one-picture"
                          onClick={() => {
                            this.showPopUp(item);
                          }}
                        >
                          <img src={item} id={index} />
                        </div>
                      ))}
                    </div>
                  }
                </div>
              );
            })}
          </Carousel>
        </div>
        {showPopUp && <PopUp imgUrl={imgUrl} handleClick={this.hidePopUp} />}
      </div>
    );
  }
}
