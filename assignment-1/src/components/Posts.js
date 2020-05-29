import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';

class Posts extends Component {
  componentWillMount = () => {
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
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
