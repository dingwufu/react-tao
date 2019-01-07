import * as React from 'react';
import { Link } from 'react-router-dom';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsiblePara from '../../components/CollapsiblePara';
import ListItem from '../../components/ListItem';
import Artist from './components/Artist';
import Comment from './container/Comment';
import ImageSlider from './container/ImageSlider';

import request from '../../helpers/request';
import './Index.scss';

interface P {}
interface S {
  artist: Array<any>,
  showImage: boolean
}
class Detail extends React.Component<P, S> {
  state = {
    artist: [],
    showImage: false
  };
  componentDidMount() {
    this.getArtist();
  }
  getArtist = async () => {
    const data = await request('/artist');

    if (data && data.length) {
      this.setState({
        artist: data
      });
    }
  }
  toggleImage = () => {
    this.setState((prevState) => ({
      showImage: !prevState.showImage,
    }));
  }
  render() {
    return (
      <div className="movie-detail">
        <div className="top">
          <div className="t-operator">
            <i className="icon icon-back" onClick={() => window.history.back()}/>
            <i className="icon icon-share" />
          </div>
          <BaseInfo onShowImage={this.toggleImage}/>
        </div>
        <div className="content">
          <div className="module">
            <ScoreSummary />
          </div>
          <div className="module">
            <CollapsiblePara>
              <div className="overview">
                哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。哇卡死了达拉斯，武切维奇匹配。
              </div>
            </CollapsiblePara>
          </div>
          <div className="module">
            <h3 className="module-title">演职人员</h3>
            <Artist data={this.state.artist}/>
          </div>
          <div className="module">
            <h3 className="module-title">观众热评</h3>
            <Comment />
          </div>
          <div className="module">
            <h3 className="module-title">影片资料</h3>
            <div>
              <ListItem href="#" title="幕后花絮"/>
              <ListItem href="#" title="台词精选"/>
              <ListItem href="#" title="出品发行"/>
            </div>
          </div>
        </div>
        <Link to="/seat" className="btn buy">选座购票</Link>
        {this.state.showImage && <ImageSlider onClose={this.toggleImage} />}
      </div>
    );
  }
}

export default Detail;
