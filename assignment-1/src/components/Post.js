import React, { Component } from 'react';
import { getPost } from '../actions/postActions';
import { getUser } from '../actions/userActions';
import { fetchPostComments } from '../actions/postActions';
import PostComponent from './PostComponent';
import { Grid } from '@material-ui/core';
import Loader from './loader';
import ErrorComponent from './error';

import { connect } from 'react-redux';

class Post extends Component {
  componentDidMount = async () => {
    component = setUp(props);
    const { id } = this.props.match.params;

    const post = (await this.props.getPost(id)).post;

    await this.props.getUser(post.userId);
    this.props.fetchPostComments(id);
  };

  render() {
    const {
      postLoading,
      commentsLoading,
      postError,
      commentsError,
      userLoading,
      userError,
      post,
      user,
      comments,
    } = this.props;

    return postLoading === true ||
      commentsLoading === true ||
      userLoading === true ? (
      <Loader />
    ) : postError !== '' || commentsError !== '' || userError !== '' ? (
      <ErrorComponent message="Something's not right" />
    ) : (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <PostComponent
            title={post.title}
            user={user}
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
  userLoading: state.User.loading,
  userError: state.User.error,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => dispatch(getPost(postId)),
    getUser: (userId) => dispatch(getUser(userId)),
    fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
