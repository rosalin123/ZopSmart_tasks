import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import Posts from './components/Posts';
import Post from './components/Post';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
