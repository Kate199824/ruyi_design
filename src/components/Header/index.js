import React, { Component } from "react";
import { headerLogo } from "../../service/ossURL";
import Dropdown from "./Dropdown/index";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toTop: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      this.setState({
        toTop: window.scrollY > 10
      });
    });
  }
  render() {
    const { toTop } = this.state;
    const list1 = [
      { name: "建筑设计手绘班", link: "/手绘/建筑设计手绘班" },
      { name: "景观设计手绘班", link: "/手绘/景观设计手绘班" },
      { name: "室内设计手绘班", link: "/手绘/室内设计手绘班" },
      { name: "工业设计手绘班", link: "/手绘/工业设计手绘班" },
      { name: "视觉传达手绘班", link: "/手绘/视觉传达手绘班" },
      { name: "城规设计手绘班", link: "/手绘/城规设计手绘班" }
    ];
    const list2 = [
      { name: "建筑快题手绘班", link: "/考研/建筑快题手绘班" },
      { name: "景观快题手绘班", link: "/考研/景观快题手绘班" },
      { name: "室内快题手绘班", link: "/考研/室内快题手绘班" },
      { name: "工业快题手绘班", link: "/考研/工业快题手绘班" },
      { name: "视觉传达手绘班", link: "/考研/视觉传达手绘班" },
      { name: "城市规划手绘班", link: "/考研/城市规划手绘班" }
    ];

    const classname = toTop ? "ry-header ry-header__top" : "ry-header";

    return (
      <div className={classname} id="ry-header">
        <Link className="ry-header-icon" to="/">
          <img src={headerLogo} />
        </Link>
        <div className="ry-header-ct">
          <Dropdown title={"首页"} ryLink="/" />
          <Dropdown title={"如一手绘"} ryLink="/手绘" list={list1} showArrow />
          <Dropdown title={"设计考研"} ryLink="/考研" list={list2} showArrow />
          <Dropdown title={"如一转专业"} ryLink="/转专业" showArrow />
          <Dropdown title={"如一软件"} ryLink="/软件" showArrow />
          <Dropdown title={"关于我们"} ryLink="/about" />
        </div>
        <div className="ry-header-right">136-7514-8010</div>
      </div>
    );
  }
}

export default withRouter(Header);
