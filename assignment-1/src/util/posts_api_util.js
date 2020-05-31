const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  try {
    let url = `${baseUrl}/posts`;
    let posts = await fetch(url, { method: 'GET' });
    let postsJson = await posts.json();
    return postsJson;
  } catch (err) {
    console.log('Error fetching posts details', err.stack);
  }
};

export const getPost = async (id) => {
  try {
    let url = `${baseUrl}/posts/${id}`;
    let post = await fetch(url, { method: 'GET' });
    let postJson = await post.json();
    return postJson;
  } catch (err) {
    console.log('Error fetching post', err.stack);
  }
};

export const getPostComments = async (id) => {
  try {
    let url = `${baseUrl}/posts/${id}/comments`;
    let comments = await fetch(url, { method: 'GET' });
    let commentsJson = await comments.json();
    return commentsJson;
  } catch (err) {
    console.log('Error fetching comments', err.stack);
  }
};

export const getUserPosts = async (id) => {
  try {
    let url = `${baseUrl}/posts?userId=${id}`;
    let userPosts = await fetch(url, { method: 'GET' });
    let userPostsJson = await userPosts.json();
    return userPostsJson;
  } catch (err) {
    console.log('Error fetching comments', err.stack);
  }
};
