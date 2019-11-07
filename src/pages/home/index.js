import React, { Component } from 'react';
import BigCarousel from '../../components/BigCarousel';
import Schools from '../../components/Schools';
import RyMap from '../../components/RyMap';
import Bar from '../../components/Bar';
import FourCourse from '../../components/FourCourse';
import Results from './Results';
import { posterList, ruyiTitle, home_rank_bg, home_why_bg, iconBarList } from '../../service/jsData/home';

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
        <div className="home-rank">
          
        </div>
        <div className="home-why">
          
        </div>
        <div className="icon-bar">
          {iconBarList.map(item => {
            return (
              <div className="icon-bar-item">
                <div className="item-icon">
                  <img src={item.url}></img>
                </div>
                <div className="item-text1">
                  {item.text1}
                </div>
                <div className="item-text2">
                  {item.text2}
                </div>
              </div>
            )
          })}
        </div>
        <div className="events"> 
          lala
        </div>
        <div className="why"> 
          lala
        </div>
        <Schools />
        <RyMap />
        <Bar />
      </div>
    )
  }
}