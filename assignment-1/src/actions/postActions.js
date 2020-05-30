import {
  FETCH_POSTS,
  GET_POST,
  FETCH_USER_POSTS,
  FETCH_COMMENTS,
} from '../actions/types';
import * as posts_api from '../util/posts_api_util';

const fetch_posts = (posts) => ({ type: FETCH_POSTS, posts });

const get_post = (post) => ({ type: GET_POST, post });

const fetch_post_comments = (comments) => ({ type: FETCH_COMMENTS, comments });

const fetch_user_posts = (posts) => ({
  type: FETCH_USER_POSTS,
  posts,
});

export const fetchPosts = () => async (dispatch) => {
  let posts = await posts_api.fetchPosts();
  console.log(posts);
  dispatch(fetch_posts(posts));
};

export const getPost = (id) => async (dispatch) => {
  let post = await posts_api.getPost(id);
  dispatch(get_post(post));
};

export const fetchPostComments = (id) => async (dispatch) => {
  let comments = await posts_api.getPostComments(id);
  dispatch(fetch_post_comments(comments));
};

export const fetchUserPosts = (id) => async (dispatch) => {
  let posts = await posts_api.getUserPosts(id);
  dispatch(fetch_user_posts(posts));
};
