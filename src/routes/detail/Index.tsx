import * as React from 'react';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import CollapsiblePara from '../../components/CollapsiblePara';
import Artist from './components/Artist';
import Comment from './container/Comment';

import request from '../../helpers/request';
import './Index.scss';

class Detail extends React.Component {
  state = {
    artist: []
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
  render() {
    return (
      <div className="detail">
        <div className="top">
          <div className="t-operator">
            <i className="icon icon-back" />
            <i className="icon icon-share" />
          </div>
          <BaseInfo />
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
        </div>
      </div>
    );
  }
}

export default Detail;
