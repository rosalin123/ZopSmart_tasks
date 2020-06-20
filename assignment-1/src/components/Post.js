import React, { Component } from 'react';
import { getPost } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { fetchPostComments } from '../actions/postActions';
import PostComponent from './PostComponent';
import { Grid } from '@material-ui/core';
import Loader from './loader';
import ErrorComponent from './error';

import { connect } from 'react-redux';

class Post extends Component {
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    await this.props.fetchUsers();
    await this.props.getPost(id);
    this.props.fetchPostComments(id);
  };

  render() {
    const {
      postLoading,
      commentsLoading,
      postError,
      commentsError,
      post,
      users,
      comments,
    } = this.props;
    return postLoading === true || commentsLoading === true ? (
      <Loader />
    ) : postError !== '' || commentsError !== '' ? (
      <ErrorComponent message="Something's not right" />
    ) : (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <PostComponent
            title={post.title}
            user={users
              .filter((user) => user.id === this.props.post.userId)
              .reduce((userObj, user) => {
                userObj = { ...user };
                return userObj;
              }, {})}
            body={post.body}
            comments={comments}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  postLoading: state.Post.loading,
  commentsLoading: state.Comments.loading,
  postError: state.Post.error,
  commentsError: state.Comments.error,
  post: state.Post.post,
  comments: state.Comments.comments,
  users: state.Users.users,
});

export default connect(mapStateToProps, {
  getPost,
  fetchUsers,
  fetchPostComments,
})(Post);
