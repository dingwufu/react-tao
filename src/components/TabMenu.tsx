import * as React from 'react';
import { Link } from 'react-router-dom';
import './TabMenu.scss';

/**
 * TabMenu, 主页Tab
 * @param {string} current - 当前页.
 * @description 无状态组件
 * @author dingwf
 */
interface TabMenu {
  current: string
}
const TabMenu = ({current}: TabMenu) => {
  return (
    <div className="tab-menu-container">
      <div className="tab-menu">
        <Link to="/" className={`btn ${current === 'movie' && 'active'}`}>
          <i className="icon movie"/>
          <span className="text">电影</span>
        </Link>
        <Link to="user" className={`btn ${current === 'user' && 'active'}`}>
          <i className="icon user"/>
          <span className="text">我的</span>
        </Link>
      </div>
    </div>
  );
};

export default TabMenu;
