import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import seatsSelect from './reducers';
import { ISeat } from './interface';

import MovieInfo from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './container/SeatSelector';
import './Index.scss';

interface P {}
interface S {
  selectedSeat: Array<ISeat>,
}

let store = createStore(seatsSelect);

class Index extends React.Component<P, S> {
  render() {
    return (
      <Provider store={store}>
        <div className="seat">
          <div className="t-operator">
            <i className="icon icon-back-black"  onClick={() => window.history.back()}/>
            万达影院
            <i className="icon icon-share-black"/>
          </div>
          <MovieInfo />
          <div className="seat-main">
            <div className="tip"/>
            <div className="graph">
              <div className="screen">B13 银幕</div>
              <div className="seat-container">
                <SeatSelector />
              </div>
            </div>
          </div>
          <SeatSelected />
        </div>
      </Provider>
    );
  }
}

export default Index;
