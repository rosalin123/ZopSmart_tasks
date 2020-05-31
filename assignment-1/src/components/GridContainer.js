import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostComponent from './PostComponent';

const userStyles = makeStyles({
  root: {
    background: '#eceff1',
  },
  headerStyles: {
    backgroundImage: 'linear-gradient(to bottom,black, lightgrey)',
    width: 800,
    height: 300,
    fontSize: '100px',
    fontWeight: 'bold',
    color: 'white',
  },
});

const GridContainer = (props) => {
  const classes = userStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <div className={classes.headerStyles}>Posts</div>
      </Grid>
      {props.posts.map((post, index) => {
        return (
          <Grid item key={index}>
            <PostComponent
              title={post.title}
              user={props.users
                .filter((user) => user.id === post.userId)
                .reduce((userObj, user) => {
                  userObj = { ...user };
                  return userObj;
                }, {})}
              body={post.body}
              id={post.id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default GridContainer;
