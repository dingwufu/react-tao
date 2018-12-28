import * as React from 'react';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import './Index.scss';

class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        <div className="top">
          <div className="t-operator">
            <i className="icon icon-back" />
            <i className="icon icon-share" />
          </div>
          <BaseInfo />
        </div>
        <div className="content">
          <div className="module">
            <ScoreSummary />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
