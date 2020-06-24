import * as actionTypes from '../actions/actionConstants';
import * as posts_api from '../Utils/postsApiUtil';

//all posts
export const fetchPostsRequest = () => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts,
});

export const fetchPostsFailure = (error) => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
  error,
});

//a single post
export const getPostRequest = () => ({
  type: actionTypes.GET_POST_REQUEST,
});

export const getPostSuccess = (post) => ({
  type: actionTypes.GET_POST_SUCCESS,
  post,
});

export const getPostFailure = (error) => ({
  type: actionTypes.GET_POST_FAILURE,
  error,
});

//comments
export const fetchCommentsRequest = () => ({
  type: actionTypes.FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (comments) => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  comments,
});

export const fetchCommentsFailure = (error) => ({
  type: actionTypes.FETCH_COMMENTS_FAILURE,
  error,
});

//user's posts

export const fetchUserPostsRequest = () => ({
  type: actionTypes.FETCH_USER_POSTS_REQUEST,
});
export const fetchUserPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_USER_POSTS_SUCCESS,
  posts,
});
export const fetchUserPostsFailure = (error) => ({
  type: actionTypes.FETCH_USER_POSTS_FAILURE,
  error,
});

//clearing posts and comments
export const clearPostRequest = () => ({
  type: actionTypes.CLEAR_POST,
});

export const clearCommentsRequest = () => ({
  type: actionTypes.CLEAR_COMMENTS,
});

export const clearUserPostsRequest = () => ({
  type: actionTypes.CLEAR_USER_POSTS,
});

//async action creators

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  let posts;
  try {
    posts = await posts_api.fetchPosts();
    return dispatch(fetchPostsSuccess(posts));
  } catch (err) {
    return dispatch(fetchPostsFailure(err));
  }
};

export const getPost = (id) => async (dispatch) => {
  dispatch(getPostRequest());
  let post;
  try {
    post = await posts_api.getPost(id);
    return dispatch(getPostSuccess(post));
  } catch (err) {
    return dispatch(getPostFailure(err));
  }
};

export const fetchPostComments = (id) => async (dispatch) => {
  dispatch(fetchCommentsRequest());
  let comments;
  try {
    comments = await posts_api.getPostComments(id);
    return dispatch(fetchCommentsSuccess(comments));
  } catch (err) {
    return dispatch(fetchCommentsFailure(err));
  }
};

export const fetchUserPosts = (id) => async (dispatch) => {
  dispatch(fetchUserPostsRequest());
  let posts;
  try {
    posts = await posts_api.getUserPosts(id);
    return dispatch(fetchUserPostsSuccess(posts));
  } catch (err) {
    return dispatch(fetchUserPostsFailure(err));
  }
};

export const clearPost = () => (dispatch) => {
  return dispatch(clearPostRequest());
};

export const clearComments = () => (dispatch) => {
  return dispatch(clearCommentsRequest());
};

export const clearUserPosts = () => (dispatch) => {
  return dispatch(clearUserPostsRequest());
};
