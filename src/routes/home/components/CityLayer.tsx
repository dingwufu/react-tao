import * as React from 'react';
import './CityLayer.scss';
type P = {

};

class CityLayer extends React.Component<P> {
  state = {  };
  render() {
    return (
      <div className="city-layer">
        <div className="title">
          <div className="close">关闭</div>
          选择城市
        </div>
        <div className="content">
          <div className="city-block">
            <div className="label" id="定位">定位城市</div>
            <ul className="wrap">
              <li className="item">杭州</li>
              <li className="item">杭州</li>
              <li className="item">杭州</li>
              <li className="item">杭州</li>
            </ul>
          </div>
          <div className="city-block">
            <div className="label" id="热门">热门城市</div>
            <ul className="wrap">
              <li className="item">杭州</li>
              <li className="item">杭州</li>
              <li className="item">杭州</li>
              <li className="item">杭州</li>
            </ul>
          </div>
          <div className="city-list">
            <div className="label" id="A">A</div>
            <ul className="wrap">
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
              <li className="item">啊客诉</li>
            </ul>
          </div>
        </div>
        <div className="index">
          <ul className="list">
            <li className="item">
              <a href="#定位">定位</a>
            </li>
            <li className="item">
              <a href="#热门">热门</a>
            </li>
            <li className="item">
              <a href="#A">A</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CityLayer;
