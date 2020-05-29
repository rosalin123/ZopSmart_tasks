import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';

class Posts extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
    this.props.fetchPosts();
  };

  render() {
    return (
      <div>
        <h1>POSTS</h1>

        {this.props.posts.map((post, index) => {
          return (
            <div key={index}>
              {' '}
              <h4>{post.title}</h4>
              {this.props.users
                .filter((user) => user.id === post.userId)
                .map((user, index) => {
                  return <h3 key={index}>{user.username}</h3>;
                })}
              {post.body}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.Posts.items,
  users: state.Users.items,
});

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(Posts);
