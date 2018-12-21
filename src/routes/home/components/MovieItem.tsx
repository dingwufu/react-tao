import * as React from 'react';
import './MovieItem.scss';

const MovieItem = () => {
  return (
    <>
      {[1, 2, 3].map((item, index) => {
        return (
          <div key={index} className="movie-item">
            <div className="poster">
              <img src="./source/movie/asset1.jpeg" alt=""/>
            </div>
            <div className="detail">
              <div className="name">神秘巨星</div>
              <div className="score">观众评分<span>9.33</span></div>
              <div className="director">导演：张易谋</div>
              <div className="actor">主演：周杰伦</div>
              <div className="tag">
                <div className="t-tag t-tag-red">今日最热</div>
                <div className="t-tag t-tag-blue">今日最热</div>
              </div>
            </div>
            <div className="btn">
              <button className="t-btn">购票</button>
              <span className="price">9.9</span>
            </div>
          </div>
        );
      })}
    </>

  );
};

export default MovieItem;
