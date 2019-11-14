import React, { Component } from "react";
import { Carousel } from "antd";
import BigCarousel from "../../components/BigCarousel";
import Schools from "../../components/Schools";
import RyMap from "../../components/RyMap";
import Bar from "../../components/Bar";
import FourCourse from "../../components/FourCourse";
import Results from "./Results";
import Rank from "./Rank";
import Show from "./Show";
import {
  posterList,
  ruyiTitle,
  home_why_horse,
  iconBarList
} from "../../service/jsData/home";

import "./style.scss";
import { importDeclaration } from "@babel/types";

/**
 * component for 为什么选择如一
 */
const HomeWhy = () => {
  return (
    <div className="home-why">
      <div className="left">
        <img src={home_why_horse} />
      </div>
    </div>
  );
};

/**
 * component for 5个小图标
 */
const HomeIconBar = () => {
  return (
    <div className="icon-bar">
      {iconBarList.map(item => {
        return (
          <div className="icon-bar-item">
            <div className="item-icon">
              <img src={item.url}></img>
            </div>
            <div className="item-text1">{item.text1}</div>
            <div className="item-text2">{item.text2}</div>
          </div>
        );
      })}
    </div>
  );
};

export default class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <BigCarousel posterList={posterList} />
        <div className="ruyi-title">
          <img src={ruyiTitle}></img>
        </div>
        <div className="course-title">
          <h1>如一手绘 · 四大课程体系</h1>
        </div>
        <FourCourse />
        <div style={{ marginTop: 20 }}>
          <Results />
        </div>
        <Rank />
        <Show />
        <HomeWhy />
        <HomeIconBar />
        <div className="events">lala</div>
        <Schools />
        <RyMap />
        <Bar />
      </div>
    );
  }
}
