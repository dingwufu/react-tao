import * as React from 'react';
import Star from '../../../components/Star';
import CollapsiblePara from '../../../components/CollapsiblePara';

import './CommentList.scss';

const CommentList = () => {
  return (
    <ul className="comment-list">
      <li className="comment-item">
        <div className="comment-user">
          <div className="avatar" style={{ backgroundImage: 'url("")', }} />
          <div className="user-detail">
            <div className="name">jack ma</div>
            <div className="score">
              <Star value={5} />
              <span className="value">9.3</span>
            </div>
          </div>
        </div>
        <div className="comment-content">
          <CollapsiblePara height={72} lineHeight={'24px'}>
            哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。
          </CollapsiblePara>
        </div>
        <div className="comment-detail">
          <div className="time">01-28 16:30</div>
          <div className="zan active">
            <i/> 2411
          </div>
        </div>
      </li>
      <li className="comment-item">
        <div className="comment-user">
          <div className="avatar" style={{ backgroundImage: 'url("")', }} />
          <div className="user-detail">
            <div className="name">jack ma</div>
            <div className="score">
              <Star value={5} />
              <span className="value">9.3</span>
            </div>
          </div>
        </div>
        <div className="comment-content">
          <CollapsiblePara height={72} lineHeight={'24px'}>
            哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。
          </CollapsiblePara>
        </div>
        <div className="comment-detail">
          <div className="time">01-28 16:30</div>
          <div className="zan active">
            <i/> 2411
          </div>
        </div>
      </li>
      <li className="comment-item">
        <div className="comment-user">
          <div className="avatar" style={{ backgroundImage: 'url("")', }} />
          <div className="user-detail">
            <div className="name">jack ma</div>
            <div className="score">
              <Star value={5} />
              <span className="value">9.3</span>
            </div>
          </div>
        </div>
        <div className="comment-content">
          <CollapsiblePara height={72} lineHeight={'24px'}>
            哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。
          </CollapsiblePara>
        </div>
        <div className="comment-detail">
          <div className="time">01-28 16:30</div>
          <div className="zan active">
            <i/> 2411
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
