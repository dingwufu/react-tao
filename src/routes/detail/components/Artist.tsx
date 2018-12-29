import * as React from 'react';
import './Artist.scss';

interface P {
  data: Array<{
    image: URL,
    name: string,
    job: string
  }>
}

/**
 * Artist,详情页演职员表
 * @param {array} data - 人员列表
 * @description 无状态组件
 * @author dingwf
 */
const Artist = ({data}: P) => {
  return (
    <div className="artist">
      <ul className="list">
        {data.map(({image, name, job}) => (
          <li key={name} className="item">
            <a href="#" className="info">
              <div className="image" style={{ backgroundImage: `url(${image})`, }}/>
              <div>
                <dl className="name">{name}</dl>
                <dd className="job">{job}</dd>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artist;
