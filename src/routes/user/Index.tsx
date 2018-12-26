import * as React from 'react';
import ListItem from '../../components/ListItem';
import TabMenu from '../../components/TabMenu';
import './Index.scss';

class User extends React.Component {
  state = {  };
  render() {
    return (
      <div className="user">
        <div className="top">
          <div className="t-operator">
            <i className="icon icon-setting" />
            <i className="icon icon-message"/>
          </div>
          <div className="info">
            <div className="avatar" style={{ backgroundImage: `url(source/avatar.jpeg)`, }}/>
            <div className="detail">
              <div className="name">周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦</div>
              <div>
                <span className="user-fellow">关注 100</span>
                <span className="user-fans">被关注 10</span>
              </div>
              <div className="level">
                <i className="icon-level"/>
                黄金会员
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <ListItem title="收藏的电影" extra="2" href="#" />
          <ListItem title="看过的电影" extra="64" href="#" />
        </div>
        <TabMenu current={'user'}/>
      </div>
    );
  }
}

export default User;
