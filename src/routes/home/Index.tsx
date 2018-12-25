import * as React from 'react';
import TopBar from './components/TopBar';
import Slide from './components/Slide';
import MovieItem from './components/MovieItem';
import CityLayer from './components/CityLayer';
import TabMenu from '../../components/TabMenu';
import Modal from '../../components/Modal';

import request from '../../helpers/request';
import './Index.scss';

class Home extends React.Component {
  state = {
    city: '', // 当前城市
    poster: [], // slide海报
    movie: [], // 当前热映电影
    cityLayerVisible: false, // 浮层
  };
  onSetCityLayer = (show = true) => {
    this.setState({
      cityLayerVisible: show
    });
  }
  onChangeCity = (city: string) => {
    this.setState({
      city,
    });
    // this.getData();
    this.onSetCityLayer(false);
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const {city, poster, movie} = await request('/index');
    this.setState({
      city,
      poster,
      movie
    });
  }
  render() {
    const { city, poster, movie, cityLayerVisible } = this.state;
    console.log(cityLayerVisible);
    return (
      <div className="home">
        <TopBar title={city} onSetCityLayer={this.onSetCityLayer}/>
        <div className="home-slide">
          <div className="home-slide-wrap">
            <Slide data={poster}/>
          </div>
        </div>
        <ul className="home-content">
          {movie.map((item) => {
            let {name} = item;
            return (
              <li key={name}><MovieItem {...item} /></li>
            );
          })}
        </ul>
        <TabMenu current={'movie'}/>
        <Modal>
          <CityLayer cityLayerVisible={cityLayerVisible} onClose={this.onSetCityLayer} onSelect={this.onChangeCity} city={city}/>
        </Modal>
      </div>
    );
  }
}

export default Home;
