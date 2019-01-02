import * as React from 'react';
import './BaseInfo.scss';

interface P {
  onShowImage: () => void
}
const BaseInfo = ({ onShowImage }: P) => {
  return (
    <div className="base-info">
      <div className="detail">
        <div className="name">唐人街探案</div>
        <div className="sub-title">dwon 2</div>
        <div className="other">喜剧 / 动作</div>
        <div className="other">中欧大陆 | 20分钟</div>
        <div className="other">2018年2月上映</div>
      </div>
      <div className="poster" style={{ backgroundImage: 'url(/source/movie/asset4.jpeg)', }} onClick={onShowImage} />
    </div>
  );
};

export default BaseInfo;
