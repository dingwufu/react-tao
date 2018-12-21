import * as React from 'react';
import './TopBar.scss';

interface TopBar {
  title: string,
  onShowCityLayer: () => void
}

const TopBar = ({title, onShowCityLayer}: TopBar) => {
  return (
    <div className="topBar">
      <div className="city" onClick={onShowCityLayer}>{title}</div>
      <div className="search" />
      <div className="scan" />
    </div>
  );
};

export default TopBar;
