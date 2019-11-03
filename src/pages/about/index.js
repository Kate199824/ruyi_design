import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import Schools from '../../components/Schools';
import RyMap from '../../components/RyMap';
import Location from './components/Location';
import Bar from '../../components/Bar';
import { titleList } from '../../service/jsData/title';

import './style.scss';

const page_name = "about";

const bg_url = titleList[page_name].bg;
const text_url = titleList[page_name].text;

export default class About extends Component {
  render() {
    return (
      <div>
        <AniBackground bg_url={bg_url} text_url={text_url} />
        <Schools />
        <RyMap />
        <Location />
        <Bar />
      </div>
    );
  }
}