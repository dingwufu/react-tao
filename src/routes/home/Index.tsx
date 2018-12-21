import * as React from 'react';
import TopBar from './components/TopBar';
import Slide from './components/Slide';
import MovieItem from './components/MovieItem';
import './Index.scss';

class Home extends React.Component {
  slideList = [
    {img: './source/slide/slide1.jpeg'},
    {img: './source/slide/slide2.jpeg'},
    {img: './source/slide/slide3.jpeg'},
    {img: './source/slide/slide4.jpeg'},
    {img: './source/slide/slide5.jpeg'},
  ];
  onShowCityLayer = () => {
    console.log('onShowCityLayer');
  }
  render() {
    return (
      <div className="home">
        <TopBar title="杭州" onShowCityLayer={this.onShowCityLayer}/>
        <div className="home-slide">
          <div className="home-slide-wrap">
            <Slide data={this.slideList}/>
          </div>
        </div>
        <div className="home-content">
          <MovieItem />
        </div>
      </div>
    );
  }
}

export default Home;
