import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import '~/assets/css/normalize.css';
import '~/assets/css/common.scss';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('app-root') as HTMLElement
);
registerServiceWorker();

// TODO
document.cookie = '111';
