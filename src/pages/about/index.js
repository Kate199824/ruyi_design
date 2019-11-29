import React, { Component } from "react";
import AniBackground from "../../components/AniBackground";
import Schools from "../../components/Schools";
import RyMap from "../../components/RyMap";
import Location from "./components/Location";
import Teachers from "./components/Teachers";
import Bar from "../../components/Bar";
import FourCourse from "../../components/FourCourse";
import { titleList } from "../../service/jsData/title";
import {
  intro_horse,
  purpose_title,
  environmentList
} from "../../service/jsData/about";

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

const p1 =
  "经过长时间的教学沉淀，如一设计工作室已经建立起一支精通专业，勇于拼搏，富有激情的教师团队，并依靠诚信的为人品格、科学的管理方式，先进的教学理念，严谨的办学作风，如磁铁般吸引更多的优秀老师和各校学生，使我们在设计教学方面拥有扎实的教学素养并富有强大的市场竞争力。舒适优越的学习环境提供了教基础保障，良师益友的教学氛围让学生可以尽情发挥自己的学习热情，一对一的小班制教学也给学生的学习效率上了最重要的保障，我们也保证小白状态来到如一设计，手上功夫满满的离开，让你超越你的同期同学做最优秀的一个。";
const p2 = "教学富有针对性，对于设计手绘而言。";
const p3 =
  "第一是解决手绘基础薄弱问题，百分之九十九的同学手绘基础薄弱，大多都体现在了线条的基本功不扎实，透视运用较不熟练上。第二是解决着色技巧缺乏问题，熟练掌握马克笔做着色是带你水平拔高，画出大神效果图的关键所在。第三是解决有效训练不足问题，灵活运用手绘除了必要的手绘技巧，最重要的是进行大量的针对性练习，熟能生巧才是关键所在。最后是解决学习难以持续的问题，思想懒惰、手上懈怠、都是源于自我目标确缺失、缺乏学习激励及学习任务的科学划分。";
const p4 =
  "以上四个问题来到如一，我们都帮你有效解决，把你的学习带入新高度。而且平时不止课上的训练，学校里的专业课作业也可以进行免费辅导，让你在学习上没有阻碍。";
const p5 =
  "来到如一设计，不仅帮助你在学习上，多元化的教学环境也可以激发你的爱好兴趣，各路名校大神汇聚一堂，考研和出国的小伙伴也会跟你分享他们的宝贵经验，不同领域的老师也会给你专业化的建议，来到如一，我们就是一家人，我们有最大的空间来尽情释放你的诉求，我们在这里等待您的加入。";

function Welcome() {
  return (
    <div className="about-welcome">
      <h4>
        <span>A B O U T</span>
        <span>O U R</span>
        <span>R U L E S</span>
      </h4>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>
      <div className="big">
        <h2>如一</h2>
        <h2>等待您的加入</h2>
      </div>
    </div>
  );
}

function Divider(props) {
  const { text } = props;
  return (
    <div className="about-divider">
      <p>{text}</p>
      <div className="line" />
    </div>
  );
}

function Environment() {
  return (
    <div className="about-environment">
      <div className="one-line">
        {environmentList.slice(0, 4).map(item => {
          return (
            <div key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
      <div className="one-line">
        {environmentList.slice(4, 8).map(item => {
          return (
            <div key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
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
        <Welcome />
        <Divider />
        <Teachers />
        <Divider text={"工作室环境"} />
        <Environment />
        <Divider text={"班级设置"} />
        <FourCourse />
        <Schools />
        <RyMap />
        <Location />
        <Bar />
      </div>
    );
  }
}
