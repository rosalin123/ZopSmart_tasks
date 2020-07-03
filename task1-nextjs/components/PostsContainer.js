import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostComponent from './PostComponent';
import PropTypes from 'prop-types';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

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

const PostsContainer = (props) => {
  const classes = userStyles();

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
      data-test="postContainerComponent"
    >
      <Grid item data-test="header">
        <div className={classes.headerStyles}>Posts</div>
      </Grid>
      {props.posts.map((post, index) => {
        return (
          <Grid item key={index} data-test="post">
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

export default PostsContainer;
