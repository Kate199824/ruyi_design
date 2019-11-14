import React, { Component } from "react";
import BigCarousel from "../../components/BigCarousel";
import Schools from "../../components/Schools";
import RyMap from "../../components/RyMap";
import Bar from "../../components/Bar";
import FourCourse from "../../components/FourCourse";
import Results from "./Results";
import Rank from "./Rank";
import Show from "./Show";
import Event from "./Event";
import {
  posterList,
  ruyiTitle,
  home_why_horse,
  iconBarList
} from "../../service/jsData/home";

import "./style.scss";

/**
 * component for 为什么选择如一
 */
const HomeWhy = () => {
  return (
    <div className="home-why">
      <div className="left">
        <img src={home_why_horse} />
      </div>
      <div className="right">
        <h2>为什么选择如一</h2>
        <div className="divider" />
        <h3>小班制一对一教学，丰富的教材教案外加老师的时时解惑。</h3>
        <div className="divider" />
        <p>
          如一设计工作室致力于设计方向的教学，包括设计手绘、设计软件等项目。主要针对设计手绘各方向的教学，有完整的教案和教学资料做后备，多元的教室为你提供自由的创作空间，一对一的小班制教学让老师为你制定层层推进的教学流程，保证你的学习质量。让你从小白到大手的蜕变水到渠成。
        </p>
        <div className="divider" />
        <p>
          如一还是一个多元的美术工作室，其中包括素描、插画、油画等学习项目，每月还会有各方向的公开课，开放的学习环境，让你无论是学业需求还是兴趣使然皆可满足。
        </p>
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
        <Results />
        <Rank />
        <Show />
        <HomeWhy />
        <HomeIconBar />
        <Event />
        <Schools />
        <RyMap />
        <Bar />
      </div>
    );
  }
}
