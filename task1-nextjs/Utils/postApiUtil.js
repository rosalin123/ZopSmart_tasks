import axios from 'axios';
import fetch from 'isomorphic-unfetch';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  let url = `${baseUrl}/posts`;
  let posts = await axios.get(url);
  let postsJson = await posts.json();
  return postsJson;
};

export const getPost = async (id) => {
  let url = `${baseUrl}/posts/${id}`;
  let post = fetch(url);
  let postJson = await post.json();
  return postJson;
};

export const getPostComments = async (id) => {
  let url = `${baseUrl}/posts/${id}/comments`;
  let comments = await axios.get(url);
  let commentsJson = await comments.json();
  return commentsJson;
};

export const getUserPosts = async (id) => {
  let url = `${baseUrl}/posts?userId=${id}`;
  let userPosts = await fetch(url);
  let userPostsJson = await userPosts.json();
  return userPostsJson;
};
