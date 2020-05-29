import React, { Component } from 'react';
import { getPost } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { fetchPostComments } from '../actions/postActions';

import { connect } from 'react-redux';

class Post extends Component {
  componentDidMount = async () => {
    this.props.fetchUsers();
    this.props.getPost();
    this.props.fetchPostComments();
  };

  render() {
    console.log('comments', this.props.comments);
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        {this.props.users
          .filter((user) => user.id === this.props.post.userId)
          .map((user, index) => {
            return <h1 key={index}>{user.username}</h1>;
          })}

        <p>{this.props.post.body}</p>

        <h1>Comments</h1>
        {this.props.comments.map((comment, index) => {
          return (
            <div key={index}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
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
