import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import '~/assets/css/normalize.css';
import '~/assets/css/common.scss';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
