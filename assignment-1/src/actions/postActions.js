import {
  FETCH_POSTS,
  GET_POST,
  FETCH_USER_POSTS,
  FETCH_COMMENTS,
  CLEAR_POST,
  CLEAR_USER_POSTS,
  CLEAR_COMMENTS,
} from '../actions/types';
import * as posts_api from '../util/posts_api_util';

export const fetch_posts = (posts) => ({ type: FETCH_POSTS, posts });

export const get_post = (post) => ({ type: GET_POST, post });

export const fetch_post_comments = (comments) => ({
  type: FETCH_COMMENTS,
  comments,
});

export const fetch_user_posts = (posts) => ({
  type: FETCH_USER_POSTS,
  posts,
});

export const clear_post = () => ({
  type: CLEAR_POST,
});

export const clear_comments = () => ({
  type: CLEAR_COMMENTS,
});

export const clear_user_posts = () => ({
  type: CLEAR_USER_POSTS,
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

export const clearPost = () => (dispatch) => {
  dispatch(clear_post());
};

export const clearComments = () => (dispatch) => {
  dispatch(clear_comments());
};

export const clearUserPosts = () => (dispatch) => {
  dispatch(clear_user_posts());
};
