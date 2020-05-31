import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import Posts from './components/Posts';
import Post from './components/Post';
import Users from './components/Users';
import User from './components/User';
import { Grid } from '@material-ui/core';
import Header from './components/header';
import { makeStyles } from '@material-ui/core';
import Albums from './components/albums';
import Photos from './components/photos';

const useStyles = makeStyles({
  contentStyles: {
    background: '#eceff1',
  },
});
function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Grid container direction="column">
            <Grid item>
              <Header />
            </Grid>
            <Grid item className={classes.contentStyles}>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts/:id" component={Post} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/users/:id" component={User} />
              <Route exact path="/albums" component={Albums} />
              <Route path="/photos/:id" component={Photos} />
            </Grid>
          </Grid>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
