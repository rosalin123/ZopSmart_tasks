import { FETCH_USERS, GET_USER } from '../actions/types';
import * as users_api from '../util/users_api_util';

export const fetch_users = (users) => {
  return { type: FETCH_USERS, users };
};

export const get_user = (user) => {
  return { type: GET_USER, user };
};

export const fetchUsers = () => async (dispatch) => {
  let users = await users_api.fetchUsers();
  console.log(users);
  dispatch(fetch_users(users));
};

export const getUser = (id) => async (dispatch) => {
  let user = await users_api.getUser(id);
  console.log('user', user);
  dispatch(get_user(user));
};
