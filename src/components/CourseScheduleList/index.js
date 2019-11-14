import React, { Component } from 'react';

import './style.scss';

export default class CourseScheduleList extends Component {
  render(){
    const { detail, scheduleList } = this.props;
    return (
      <div className="course-schedule-list">
        <table>
			    <tr className="title">
				    <td colspan="3">如一「{detail}」课程介绍</td>
			    </tr>
			    {
						scheduleList.map(item => {
							return (
								<tr className="one-line">
				    			<td>{item.name}</td>
				    			<td>{item.subject}</td>
            			<td>{item.content}</td>
			    			</tr>
							)
						})
					}
		    </table>
      </div>
    )
  }
}