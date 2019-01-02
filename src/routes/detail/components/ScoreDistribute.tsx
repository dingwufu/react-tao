import * as React from 'react';
import Star from '../../../components/Star';

import './ScoreDistribute.scss';

const ScoreDistribute = () => {
  return (
    <div className="score-distribute">
      <div className="score">
        <div className="value">9.3</div>
        <div className="desc">10000人评论</div>
      </div>
      <div className="distribute">
        {[10, 8, 6, 4, 2].map(item => (
          <div className="item" key={item}>
            <Star value={item} size={9} />
            <div className="bottom">
              <div className="top" style={{ width: (item * 10) + '%', }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreDistribute;
