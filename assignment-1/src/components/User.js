import React, { Component } from 'react';
import { getUser } from '../actions/userActions';
import { fetchUserPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';
import PostComponent from './PostComponent';
import { deepOrange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Loader from './loader';
import ErrorComponent from './error';
import About from './about.js';

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

  lineStyles: {
    width: 800,
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
    paddingTop: 120,
    paddingBottom: 20,
    width: '100%',
    background: 'white',
    textAlign: 'center',
  },

  postStyles: {
    background: '#eceff1',
    width: '100vw',
  },

  aboutStyles: {
    background: '#eceff1',
    marginTop: '-16px',
    padding: '16px',
    width: '100vw',
  },

  typographyStyles: {
    fontWeight: 'bold',
    fontSize: '28px',
    textAlign: 'center',
  },
};

class User extends Component {
  state = {
    showPosts: true,
    showAbout: false,
  };

  componentDidMount = () => {
    let { id } = this.props.match.params;
    this.props.getUser(id);
    this.props.fetchUserPosts(id);
  };

  handleClick = (e) => {
    if (e.currentTarget.textContent === 'About') {
      this.setState({ showAbout: true, showPosts: false });
    } else {
      this.setState({ showAbout: false, showPosts: true });
    }
  };

  render() {
    const { classes } = this.props;

    let {
      posts,
      user,
      userErr,
      postsErr,
      userLoading,
      postsLoading,
    } = this.props;
    return userLoading === true || postsLoading === true ? (
      <Loader />
    ) : userErr !== '' || postsErr !== '' ? (
      <ErrorComponent message="Something's not right" />
    ) : (
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

            <hr className={classes.lineStyles} />

            <Grid container justify="center" spacing={5}>
              <Grid item>
                <Button color="inherit" onClick={(e) => this.handleClick(e)}>
                  Posts
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={(e) => this.handleClick(e)}>
                  About
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {this.state.showPosts === true ? (
            <Grid item>
              <Grid
                container
                spacing={4}
                justify="center"
                alignItems="center"
                className={classes.postStyles}
                direction="column"
              >
                {posts.map((post, index) => {
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
          ) : (
            <Grid item className={classes.aboutStyles}>
              <Grid container justify="center">
                <Grid item>
                  <About user={user} />
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.User.user,
  userLoading: state.User.loading,
  userErr: state.User.error,
  posts: state.UserPosts.posts,
  postsLoading: state.UserPosts.loading,
  postsErr: state.UserPosts.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userId) => dispatch(getUser(userId)),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(User));
