import React, { Component } from 'react';
import './style.scss';
import { Icon } from 'antd';

const item1 = {
  title: '首页',
  list: [
    { name: '首页详情' }
  ]
};
const item2 = {
  title: '如一手绘',
  list: [
    { name: '建筑设计手绘班', link: '/手绘/建筑' },
    { name: '风园设计手绘班', link: '/手绘/风园' },
    { name: '室内设计手绘班', link: '/手绘/室内' },
    { name: '景观设计手绘班', link: '/手绘/景观' },
    { name: '城规设计手绘班', link: '/手绘/城规' },
    { name: '平面设计手绘班', link: '/手绘/平面' }
  ]
};

const item3 = {
  title: '设计考研',
  list: [
    { name: '建筑快题手绘班', link: '/考研/建筑' },
    { name: '风园快题手绘班', link: '/考研/风园' },
    { name: '室内快题手绘班', link: '/考研/室内' },
    { name: '景观快题手绘班', link: '/考研/景观' },
    { name: '城规快题手绘班', link: '/考研/城规' },
    { name: '环艺快题手绘班', link: '/考研/环艺' }
  ]
};
const item4 = {
  title: '如一转专业',
  list: [
    { name: '风景园林专业', link: '/转专业' },
    { name: '建筑专业', link: '/转专业' },
    { name: '城市规划专业', link: '/转专业' },
    { name: '环境艺术专业', link: '/转专业' },
    { name: '室内设计专业', link: '/转专业' },
    { name: '工业设计专业', link: '/转专业' }
  ]
};
const item5 = {
  title: '如一软件',
  list: [
    { name: '建筑设计软件', link: '/软件' },
    { name: '景观设计软件', link: '/软件' },
    { name: '室内设计软件', link: '/软件' },
    { name: '平面设计软件', link: '/软件' },
    { name: '动画设计软件', link: '/软件' }
  ]
};
const item6 = {
  title: '关于我们',
  list: [{ name: '关于我们详情' }]
};
const itemlist = [item1, item2, item3, item4, item5, item6];
const infoText =
  '南京如一艺术工作室 地址:南京市玄武区新街口街道丹凤街恒基公寓A座2单元1101室 南京如一艺术工作室';

function Item(props) {
  const { title, list = [] } = props;
  return (
    <div className="ry-footer-item">
      <div className="item-title">{title}</div>
      <div>
        {list.map(item => {
          return <div className="item-cnt">{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default class Footer extends Component {
  render() {
    return (
      <div className="ry-footer">
        <div className="ry-footer-top">
          {itemlist.map(item => {
            return <Item title={item.title} list={item.list} />;
          })}
        </div>
        <div className="ry-footer-mid">
          <div className="ry-footer-mid-text">
            <Icon type="phone" />
             报名热线
          </div>
          <div className="ry-footer-mid-phone">13675148010</div>
        </div>
        <div className="ry-footer-bottom">{infoText}</div>
        <a className="jinbingshu-ad" href="/me" target="_blank">
          关于本网站开发者
        </a>
      </div>
    );
  }
}
