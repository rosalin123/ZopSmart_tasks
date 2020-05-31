import React, { Component } from 'react';
import { getPost } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { fetchPostComments } from '../actions/postActions';
import PostComponent from './PostComponent';
import { Grid } from '@material-ui/core';

import { connect } from 'react-redux';

class Post extends Component {
  componentDidMount = async () => {
    //this.props.fetchUsers();
    this.props.getPost(this.props.match.params.id);
    this.props.fetchPostComments(this.props.match.params.id);
  };

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <PostComponent
            title={this.props.post.title}
            user={this.props.users
              .filter((user) => user.id === this.props.post.userId)
              .reduce((userObj, user) => {
                userObj = { ...user };
                return userObj;
              }, {})}
            body={this.props.post.body}
            comments={this.props.comments}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.Posts.item,
  users: state.Users.items,
  comments: state.Comments,
});

export default connect(mapStateToProps, {
  getPost,
  fetchUsers,
  fetchPostComments,
})(Post);
