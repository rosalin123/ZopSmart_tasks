import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';
import PostsContainer from './postsContainer';
import { clearComments, clearPost } from '../actions/postActions';
import Loader from './loader';
import ErrorComponent from './error';

class Posts extends Component {
  componentDidMount = async () => {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.clearPost();
    this.props.clearComments();
  };
  render() {
    const { loading, posts, error, users } = this.props;

    return loading === true ? (
      <Loader />
    ) : error !== '' ? (
      <ErrorComponent message="Something's not right" />
    ) : (
      <PostsContainer posts={posts} users={users} />
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.Posts.posts,
  loading: state.Posts.loading,
  error: state.Posts.error,
  users: state.Users.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchUsers: () => dispatch(fetchUsers()),
    clearComments: () => dispatch(clearComments()),
    clearPost: () => dispatch(clearPost()),
  };
};

Posts.propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
