import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import { titleList } from '../../service/jsData/title';

import './style.scss';

const page_name = "hand";

const bg_url = titleList[page_name].bg;
const text_url = titleList[page_name].text;

export default class Hand extends Component {
  render(){
    return (
      <div>
        <AniBackground bg_url={bg_url} text_url={text_url} />
        <div className="ry-split">— 基础设计手绘 —</div>
      </div>
    )
  }
}