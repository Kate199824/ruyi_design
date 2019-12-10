import React, { Component } from "react";
import { whiteWithChar } from "../../service/ossURL";
import Map from "./Map";
import "./style.scss";

const locationText1 = "南京市 玄武区 新街口街道 丹凤街";
const locationText2 = "恒基国际中心公寓A座2单元1101室";

export default class RyMap extends Component {
  render() {
    return (
      <div className="mapSection">
        <img className="logo" src={whiteWithChar} />
        <div className="text">
          <div className="title">联系方式</div>
          <div className="line" />
          <div className="section">
            <div className="subTitle">地址:</div>
            <div className="content">
              {locationText1}
              <br />
              {locationText2}
            </div>
          </div>
          <div className="section">
            <div className="subTitle">电话:</div>
            <div className="content">
              025-85385300
              <br /> 136-75148-010
            </div>
          </div>
        </div>
        <div className="mapContainer">
          <Map></Map>
        </div>
      </div>
    );
  }
}
