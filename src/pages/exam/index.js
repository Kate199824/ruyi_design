import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import { titleList } from '../../service/jsData/title';

import './style.scss';

const page_name = "exam";

const bg_url = titleList[page_name].bg;
const text_url = titleList[page_name].text;

export default class Exam extends Component {
  render(){
    return (
      <div>
       <AniBackground bg_url={bg_url} text_url={text_url} />
       <div className="ry-split">— 考研快题手绘 —</div>
      </div>
    )
  }
}