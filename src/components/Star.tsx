import * as React from 'react';
import './Star.scss';

/**
 * desc: 星星评分组件
 * props: value 评分/十分制 size 星星大小
 */
interface Star {
  value: number,
  size ?: number
}
const Star = ({ value, size= 15 }: Star) => (
  <div className="star" style={{ height: size, width: `${size * 5}px`, }}>
    <div className="top" style={{ width: `${value * size / 2}px`, }} />
  </div>
);

export default Star;
