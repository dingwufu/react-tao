import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Star from './Star';

it('星星评分组件渲染正常', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Star value={6} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
