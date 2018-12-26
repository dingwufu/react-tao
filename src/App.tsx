import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/home/Index';
import User from './routes/user/Index';
import './App.scss';
// import logo from './logo.svg';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/user" exact={true} component={User} />
        </Switch>
      </Router>
    );
  }
}

export default App;
