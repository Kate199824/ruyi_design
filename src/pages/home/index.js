import React, { Component } from 'react';
import BigCarousel from '../../components/BigCarousel';
import Schools from '../../components/Schools';
import RyMap from '../../components/RyMap';
import Bar from '../../components/Bar';
import FourCourse from '../../components/FourCourse';
import Results from './Results';
import { posterList, ruyiTitle } from '../../service/jsData/home';

import './style.scss';


export default class Home extends Component {
  render(){
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
        <div style={{marginTop: 20}}>
        <Results />
        </div>
        <Schools />
        <RyMap />
        <Bar />
      </div>
    )
  }
}