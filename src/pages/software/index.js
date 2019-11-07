import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import CourseList from '../../components/CourseList';
import { titleList } from '../../service/jsData/title';

import './style.scss';

const page_name = "software";

const bg_url = titleList[page_name].bg;
const text_url = titleList[page_name].text;

export default class Software extends Component {
  render(){
    return (
      <div>
       <AniBackground bg_url={bg_url} text_url={text_url} />
       <div className="ry-split">— 如一设计软件 —</div>
       <CourseList page_name={page_name}/>
      </div>
    )
  }
}