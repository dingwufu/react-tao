import * as React from 'react';
import './TopBar.scss';

interface TopBar {
  title: string,
  onSetCityLayer: () => void
}

const TopBar = ({title, onSetCityLayer}: TopBar) => {
  return (
    <div className="topBar">
      <div className="city" onClick={onSetCityLayer}>{title}</div>
      <div className="search" />
      <div className="scan" />
    </div>
  );
};

export default TopBar;
