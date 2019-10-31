import React from 'react';
import { Redirect, Route } from 'react-router';

import Home from '../pages/home';
import About from '../pages/about';

import Hand from '../pages/hand';
import HandDetail from '../pages/hand/detail';

import Exam from '../pages/exam';
import ExamDetail from '../pages/exam/detail';

import Transfer from '../pages/transfer';
import TransferDetail from '../pages/transfer/detail';

import Software from '../pages/software';
import SoftwareDetail from '../pages/software/detail';

export default [
  <Route key={'home'} exact path={'/'} component={Home}></Route>,
  <Route key={'about'} exact path={'/about'} component={About}></Route>,
  <Route key={'hand'} exact path={'/手绘'} component={Hand}></Route>,
  <Route key={'handDetail'} exact path={'/手绘/:detail'} component={HandDetail}></Route>,
  <Route key={'exam'} exact path={'/考研'} component={Exam}></Route>,
  <Route key={'examDetail'} exact path={'/考研/:detail'} component={ExamDetail}></Route>,
  <Route key={'transfer'} exact path={'/转专业'} component={Transfer}></Route>,
  <Route key={'transferDetail'} exact path={'/转专业/:detail'} component={TransferDetail}></Route>,
  <Route key={'software'} exact path={'/软件'} component={Software}></Route>,
  <Route key={'softwareDetail'} exact path={'/软件/:detail'} component={SoftwareDetail}></Route>
];