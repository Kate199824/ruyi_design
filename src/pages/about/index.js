import React, { Component } from "react";
import AniBackground from "../../components/AniBackground";
import Schools from "../../components/Schools";
import RyMap from "../../components/RyMap";
import Location from "./components/Location";
import Bar from "../../components/Bar";
import { titleList } from "../../service/jsData/title";
import { intro_horse, purpose_title } from "../../service/jsData/about";

import "./style.scss";

const page_name = "about";

const bg_url = titleList[page_name].bg;
const text_url = titleList[page_name].text;

function Purpose() {
  return (
    <div className="about-purpose">
      <div className="left">
        <img src={purpose_title} />
      </div>
      <div className="right">
        <h3>我们的宗旨</h3>
        <h3>—</h3>
        <h3>以梦为马</h3>
        <h3>始终如一</h3>
        <p>
          如一设计拥有完备的教学资料，优秀的师资和专业的设计培训经验，完整的教学流程；针对不同学员量身订做不一样的教学方法。
        </p>
        <p>
          我们一直打造的真正“一对一”教学模式，在老师认真负责的教学态度下，讲解与实干完美结合，达到事半功倍的学习效果。
        </p>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="about-intro">
      <div className="left">
        <h2>工作室简介</h2>
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
      <div className="right">
        <img src={intro_horse} />
      </div>
    </div>
  );
}

function Guide() {
  return (
    <div className="about-guide">
      <h3>Admission Guide</h3>
      <h3>—</h3>
      <h3>招生简章</h3>
    </div>
  );
}

export default class About extends Component {
  render() {
    return (
      <div className="about-body">
        <AniBackground bg_url={bg_url} text_url={text_url} />
        <Purpose />
        <Intro />
        <Guide />
        <Schools />
        <RyMap />
        <Location />
        <Bar />
      </div>
    );
  }
}
