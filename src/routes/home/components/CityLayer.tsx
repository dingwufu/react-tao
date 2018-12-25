import * as React from 'react';
import request from '../../../helpers/request';
import './CityLayer.scss';

type P = {
  city: string,
  onClose: (isShow: boolean) => void,
  onSelect: (city: string) => void,
  cityLayerVisible: boolean,
};
interface CityItem {
  cityCode: string,
  regionName: string
}

class CityLayer extends React.Component<P> {
  state = {
    hot: [], // 热门城市
    all: {}, // 全部城市
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const {hot, all} = await request('/city');
    this.setState({
      hot,
      all
    });
  }
  onClickClose = () => {
    let {onClose} = this.props;
    onClose(false);
  }
  render() {
    let {hot, all} = this.state;
    let {city, cityLayerVisible, onSelect} = this.props;
    const alphabetKeys = Object.keys(all);
    return (
      <>
      {cityLayerVisible && <div className="city-layer">
        <div className="title">
          <div className="close" onClick={this.onClickClose}>关闭</div>
          选择城市
        </div>
        <div className="content">
          <div className="city-block">
            <div className="label" id="定位">定位城市</div>
            <ul className="wrap">
              <li className="item">{city}</li>
            </ul>
          </div>
          <div className="city-block">
            <div className="label" id="热门">热门城市</div>
            <ul className="wrap">
              {hot.map(({cityCode, regionName}) => <li key={cityCode} className="item" onClick={() => onSelect(regionName)}>{regionName}</li>)}
            </ul>
          </div>
          {alphabetKeys.map(alphabet => {
            const citys = all[alphabet];
            return (
              <div key={alphabet} className="city-list">
                <div className="label" id={alphabet}>{alphabet}</div>
                <ul className="wrap">
                  {citys.map(({cityCode, regionName}: CityItem) => <li key={cityCode} onClick={() => onSelect(regionName)} className="item">{regionName}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="index">
          <ul className="list">
            <li className="item">
              <a href="#定位">定位</a>
            </li>
            <li className="item">
              <a href="#热门">热门</a>
            </li>
            {alphabetKeys.map(alphabet => <li key={alphabet} className="item"><a href={`#${alphabet}`}>{alphabet}</a></li>)}
          </ul>
        </div>
      </div>}
      </>
    );
  }
}

export default CityLayer;
