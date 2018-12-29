import * as React from 'react';
import ScoreDistribute from '../components/ScoreDistribute';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <ScoreDistribute />
      </div>
    );
  }
}

export default Comment;
