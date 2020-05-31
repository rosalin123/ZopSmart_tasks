import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';
import GridContainer from './GridContainer';
import { clearComments, clearPost } from '../actions/postActions';

class Posts extends Component {
  componentDidMount = async () => {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.clearPost();
    this.props.clearComments();
  };
  render() {
    return <GridContainer posts={this.props.posts} users={this.props.users} />;
  }
}

const mapStateToProps = (state) => ({
  posts: state.Posts.items,
  users: state.Users.items,
});

export default connect(mapStateToProps, {
  fetchPosts,
  fetchUsers,
  clearComments,
  clearPost,
})(Posts);
