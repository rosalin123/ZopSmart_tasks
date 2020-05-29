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

export const getPost = async () => {
  try {
    let url = `${baseUrl}/posts/1`;
    let post = await fetch(url, { method: 'GET' });
    let postJson = await post.json();
    return postJson;
  } catch (err) {
    console.log('Error fetching post', err.stack);
  }
};

export const getPostComments = async () => {
  try {
    let url = `${baseUrl}/posts/1/comments`;
    let comments = await fetch(url, { method: 'GET' });
    let commentsJson = await comments.json();
    return commentsJson;
  } catch (err) {
    console.log('Error fetching comments', err.stack);
  }
};
