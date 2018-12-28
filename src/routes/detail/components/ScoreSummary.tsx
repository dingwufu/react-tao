import * as React from 'react';
import Star from '../../../components/Star';
import './ScoreSummary.scss';

const ScoreSummary = () => {
  return (
    <div className="score-summary">
      <div className="top">
        <div className="item">
          <div className="value">9.3&nbsp;<Star value={4} /></div>
          <div className="title">观众评分12222人</div>
        </div>
        <div className="item">
          <div className="value">80%</div>
          <div className="title">V淘推荐度</div>
        </div>
        <div className="item">
          <div className="value">87223</div>
          <div className="title">想看人数</div>
        </div>
      </div>
      <div className="summary-btn">
        <button className="item want"><i /> 想看</button>
        <button className="item seem"><i />看过</button>
      </div>
    </div>
  );
};

export default ScoreSummary;
