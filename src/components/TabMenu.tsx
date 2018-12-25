import * as React from 'react';
import { Link } from 'react-router-dom';
import './TabMenu.scss';

interface TabMenu {
  current: string
}

const TabMenu = ({current}: TabMenu) => {
  return (
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
  );
};

export default TabMenu;
