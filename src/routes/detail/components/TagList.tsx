import * as React from 'react';
import './TagList.scss';

interface P {
  data: Array<{
    text: string,
    count: string | number
  }>,
  current: string,
  onClick: (value: string) => void
}
const TagList = ({data, current, onClick}: P) => {
  const onClickTag = (value: string) => {
    if (value !== current) {
      onClick(value);
    }
  };
  return (
    <div className="taglist">
      {data.map(({text, count}) => <span key={text} className={`item ${current === text && 'active'} `} onClick={() => onClickTag(text)}>{text} {count}</span>)}
    </div>
  );
};

export default TagList;
