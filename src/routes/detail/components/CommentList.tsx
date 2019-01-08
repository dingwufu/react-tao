import * as React from 'react';
import Star from '../../../components/Star';
import CollapsiblePara from '../../../components/CollapsiblePara';

import './CommentList.scss';
interface P {
  data: Array<{
    id: string,
    name: string,
    score: number,
    content: string,
    time: string,
    isZan: boolean,
    zan: number | string,
  }>,
  onClickZan: (id: string) => void,
}
const CommentList = ({data, onClickZan}: P) => {
  return (
    <ul className="comment-list">
      {data.map(({id, name, score, content, time, isZan, zan}) => (
        <li key={id} className="comment-item">
          <div className="comment-user">
            <div className="avatar" style={{ backgroundImage: 'url(./source/default-avatar.jpg)', }} />
            <div className="user-detail">
              <div className="name">{name}</div>
              <div className="score">
                <Star value={score} />
                <span className="value">{score}</span>
              </div>
            </div>
          </div>
          <div className="comment-content">
            <CollapsiblePara height={72} lineHeight={'24px'}>{content}
            </CollapsiblePara>
          </div>
          <div className="comment-detail">
            <div className="time">{time}</div>
            <div className={`zan ${isZan && 'active'}`}  onClick={() => onClickZan(id)}>
              <i/> {zan}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
