import React, { Component } from 'react';
import AniBackground from '../../../components/AniBackground';
import DetailTitle from '../../../components/DetailTitle';
import CourseScheduleList from '../../../components/CourseScheduleList';
import DetailStudentWork from '../../../components/DetailStudentWork';
import { imgList, code_img, courseInfoList, courseScheduleList, courseStudentWorkList } from '../../../service/jsData/course/exam';
import { titleList } from '../../../service/jsData/title';

import '../../../service/cssData/detailBg.scss';
import './style.scss';

const page_name = "exam";

const bg_url = titleList[page_name].bg;
const text_url = titleList[page_name].text;

export default class ExamDetail extends Component {
  
  render(){
    const { detail } = this.props.match.params;

    return (
      <div>
       <AniBackground bg_url={bg_url} text_url={text_url} />
       <div className="ry-split">— {detail} —</div>
       <DetailTitle detail={detail} imgUrl={imgList[detail]} codeUrl={code_img} coursePrice={courseInfoList[detail].coursePrice} courseNumber={courseInfoList[detail].courseNumber} />
       <CourseScheduleList detail={detail}  scheduleList={courseScheduleList[detail]} />
       <div className={"use-detail-bg detail_page_name_" + page_name}> 
        <DetailStudentWork studentWorkList={courseStudentWorkList[detail]} />
       </div>
      </div>
    )
  }
}