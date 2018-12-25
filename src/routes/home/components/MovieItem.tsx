import * as React from 'react';
import './MovieItem.scss';
interface MovieItem {
  actor?: string,
  description: string,
  director: string,
  name: string,
  poster: string,
  score: number,
  tags?: Array<string>
}

const MovieItem = ({actor, description, director, name, poster, score, tags}: MovieItem) => {
  return (
    <div className="movie-item">
      <div className="poster">
        <img src={poster} alt=""/>
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="score">观众评分<span>{score}</span></div>
        <div className="director">导演：{director}</div>
        {actor && <div className="actor">主演：{actor}</div>}
        {tags && <div className="tag">
          {tags.map((tag, index) => {
            let classColor = index % 2 ? 'red' : 'blue';
            return (
              <div
                key={tag}
                className={`t-tag t-tag-${classColor}`}
              >
                {tag}
              </div>
            );
          })}
        </div>}
      </div>
      <div className="btn">
        <button className="t-btn">购票</button>
        <span className="price">9.9</span>
      </div>
    </div>
  );
};

export default MovieItem;
