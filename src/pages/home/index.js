import React, { Component } from 'react';
import Schools from '../../components/Schools';
import RyMap from '../../components/RyMap';
import Bar from '../../components/Bar';

export default class Home extends Component {
  render(){
    return (
      <div>
       <div>
        <Schools></Schools>
       </div>
        <RyMap></RyMap>
        <Bar></Bar>
      </div>
    )
  }
}