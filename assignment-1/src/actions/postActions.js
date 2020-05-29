import { FETCH_POSTS, GET_POST, FETCH_COMMENTS } from '../actions/types';
import * as posts_api from '../util/posts_api_util';

const fetch_posts = (posts) => {
  return { type: FETCH_POSTS, posts };
};

const get_post = (post) => {
  return { type: GET_POST, post };
};

const fetch_post_comments = (comments) => {
  return { type: FETCH_COMMENTS, comments };
};
export const fetchPosts = () => async (dispatch) => {
  let posts = await posts_api.fetchPosts();
  console.log(posts);
  dispatch(fetch_posts(posts));
};

export const getPost = () => async (dispatch) => {
  let post = await posts_api.getPost();
  dispatch(get_post(post));
};

export const fetchPostComments = () => async (dispatch) => {
  let comments = await posts_api.getPostComments();
  dispatch(fetch_post_comments(comments));
};
