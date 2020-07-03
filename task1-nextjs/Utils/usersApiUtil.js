import fetch from 'isomorphic-unfetch';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  try {
    let url = `${baseUrl}/users`;
    let users = await fetch(url);
    let usersJson = await users.json();
    return usersJson;
  } catch (err) {
    console.log('Error fetching users details', err.stack);
  }
};

export const getUser = async (id) => {
  let url = `${baseUrl}/users/${id}`;
  let user = await fetch(url);
  let userJson = await user.json();
  return userJson;
};
