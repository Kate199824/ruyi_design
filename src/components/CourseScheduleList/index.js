import React, { Component } from 'react';

import './style.scss';

export default class CourseScheduleList extends Component {
  render(){
    const { detail } = this.props;
    return (
      <div className="course-schedule-list">
        <table>
			    <tr className="title">
				    <td colspan="3">如一{detail}课程介绍</td>
			    </tr>
			    <tr className="subtitle">
				    <td>课程模块</td>
				    <td>课程主题</td>
				    <td>课程学习内容</td>
			    </tr>
			    <tr className="one-line">
				    <td>课程模块一</td>
				    <td>基础课</td>
            <td>1.aaa 2.bbb 3.ccc</td>
			    </tr>
          <tr className="one-line">
				    <td>课程模块一</td>
				    <td>基础课</td>
            <td>1.aaaaaaaaaaaaa 2.bbddddddddb 3.ggggghhhhhhccc</td>
			    </tr>
          <tr className="one-line">
				    <td>课程模块一</td>
				    <td>基础课</td>
            <td>1.aaa 2.bbb 3.ccc</td>
			    </tr>
          <tr className="one-line">
				    <td>课程模块一</td>
				    <td>基础课</td>
            <td>1.aaa 2.bbb 3.ccc</td>
			    </tr>
          <tr className="one-line">
				    <td>课程模块一</td>
				    <td>基础课</td>
            <td>1.aaa 2.bbb 3.ccc</td>
			    </tr>
		    </table>
      </div>
    )
  }
}