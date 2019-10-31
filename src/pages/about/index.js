import React, { Component } from 'react';
import Schools from '../../components/Schools';
import RyMap from '../../components/RyMap';
import Location from './components/Location';
import Bar from '../../components/Bar';

import './style.scss';

export default class About extends Component {
  render() {
    return (
      <div>
        <Schools></Schools>
        <RyMap></RyMap>
        <Location />
        <Bar />
      </div>
    );
  }
}