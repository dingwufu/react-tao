import * as React from 'react';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <ScoreDistribute />
        <div style={{ marginTop: 16, }}>
          <TagList />
        </div>
        <div style={{ marginTop: 20, }}>
          <CommentList />
        </div>
      </div>
    );
  }
}

export default Comment;
