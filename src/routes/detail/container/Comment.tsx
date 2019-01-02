import * as React from 'react';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';
import request from '../../../helpers/request';
import './Comment.scss';

interface P extends React.Props<P> {

}
interface S {
  tags: Array<any>,
  comments: Array<{
    tag: string,
    id: string,
    isZan: boolean,
    zan: number,
  }>,
  current: string // 当前选中标签
}
class Comment extends React.Component<P, S> {
  state = {
    tags: [],
    comments: [],
    current: '' // 当前选中标签
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const { tags, list } = await request('/comment');
    this.setState({
      tags,
      comments: list,
      current: tags[0] ? tags[0].text : '',
    });
  }
  changeTag = (value: string) => {
    this.setState({
      current: value
    });
  }
  toggleZan = (id: string) => {
    this.setState((prevState) => ({
      comments: prevState.comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            isZan: !comment.isZan,
            zan: comment.isZan ? --comment.zan : ++comment.zan,
          };
        }
        return comment;
      })
    }));
  }
  render() {
    const { tags, comments, current } = this.state;
    const filterComments = comments.filter(({tag}) => tag === current);
    return (
      <div className="comment">
        <ScoreDistribute />
        <div style={{ marginTop: 16, }}>
          <TagList data={tags} current={current} onClick={this.changeTag}/>
        </div>
        <div style={{ marginTop: 20, }}>
          <CommentList data={filterComments} onClickZan={this.toggleZan}/>
        </div>
      </div>
    );
  }
}

export default Comment;
