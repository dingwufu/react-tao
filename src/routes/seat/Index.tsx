import * as React from 'react';
import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import './Index.scss';

class Index extends React.Component {
  render() {
    return (
      <div className="seat">
        <div className="t-operator">
          <i className="icon icon-back-black" />
          万达影院
          <i className="icon icon-share-black"/>
        </div>
        <MovieInfo />
        <div className="seat-main">
          <div className="tip"/>
          <div className="graph">
            <div className="screen">B13 银幕</div>
          </div>
        </div>
        <SeatSelected />
      </div>
    );
  }
}

export default Index;
