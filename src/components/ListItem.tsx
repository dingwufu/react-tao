import * as React from 'react';
import './ListItem.scss';

interface ListItem {
  href: string,
  title: string,
  extra?: string
}

const ListItem = ({href, title, extra}: ListItem) => {
  return (
    <a href={href} className="list-item">
      <span className="title">{title}</span>
      <span className="extra">{extra}</span>
      <i className="arrow" />
    </a>
  );
};

export default ListItem;
