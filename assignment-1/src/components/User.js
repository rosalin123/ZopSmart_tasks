import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { fetchUserPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';
import PostComponent from './PostComponent';
import { deepOrange } from '@material-ui/core/colors';

const styles = {
  root: {
    width: '100%',
  },

  square: {
    position: 'relative',
    backgroundImage: 'linear-gradient(to bottom,black, lightgrey)',
    width: '100vw',
    height: 500,
  },

  avatar: {
    position: 'absolute',
    bottom: -100,
    left: '43.75%',
    width: 200,
    height: 200,
    border: '10px solid white',
    backgroundColor: deepOrange[500],
    fontSize: '70px',
    fontWeight: 'bold',
  },

  userNameStyles: {
    marginTop: 120,
    marginBottom: 20,
  },

  postStyles: {
    background: '#eceff1',
    width: '100vw',
  },

  typographyStyles: {
    fontWeight: 'bold',
    fontSize: '28px',
    textAlign: 'center',
  },
};

class User extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
    this.props.fetchUserPosts(this.props.match.params.id);
  };

  render() {
    const { classes } = this.props;
    let { id } = this.props.match.params;

    let user = this.props.users
      .filter((user) => user.id === Number(id))
      .reduce((userObj, user) => {
        userObj = { ...user };
        return userObj;
      }, {});

    return (
      <Grid container>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            {' '}
            <div className={classes.square}>
              <Avatar className={classes.avatar}>
                {user.username ? user.username[0] : ''}{' '}
              </Avatar>
            </div>
          </Grid>
          <Grid item className={classes.userNameStyles}>
            <Typography className={classes.typographyStyles}>
              {user.username}
            </Typography>

            <Typography color="textSecondary">{user.email}</Typography>
          </Grid>

          <Grid item>
            <Grid
              container
              spacing={4}
              justify="center"
              alignItems="center"
              className={classes.postStyles}
              direction="column"
            >
              {this.props.posts.map((post, index) => {
                return (
                  <Grid item key={index}>
                    <PostComponent
                      title={post.title}
                      user={user}
                      body={post.body}
                      id={post.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.Users.items,
  posts: state.UserPosts,
});

export default connect(mapStateToProps, {
  fetchUsers,
  fetchUserPosts,
})(withStyles(styles)(User));
