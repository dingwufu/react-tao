import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/home/Index';
import User from './routes/user/Index';
import Detail from './routes/detail/Index';
import Seat from './routes/seat/Index';
import './App.scss';
// import logo from './logo.svg';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/user" exact={true} component={User} />
          <Route path="/detail" exact={true} component={Detail} />
          <Route path="/seat" exact={true} component={Seat} />
        </Switch>
      </Router>
    );
  }
}

export default App;
