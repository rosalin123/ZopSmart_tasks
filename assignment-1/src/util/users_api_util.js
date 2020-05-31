const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  try {
    let url = `${baseUrl}/users`;
    let users = await fetch(url, { method: 'GET' });
    let usersJson = await users.json();
    return usersJson;
  } catch (err) {
    console.log('Error fetching users details', err.stack);
  }
};

export const getUser = async () => {
  try {
    let url = `${baseUrl}/users/1`;
    let user = await fetch(url, { method: 'GET' });
    let userJson = await user.json();
    return userJson;
  } catch (err) {
    console.log('Error fetching user', err.stack);
  }
};
