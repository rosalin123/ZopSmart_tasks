import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CLEAR_USER,
} from '../actions/actionConstants';
import * as users_api from '../Utils/usersApiUtil';

//all users

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  error,
});

//single user
export const getUserRequest = () => ({ type: GET_USER_REQUEST });

export const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, user });

export const getUserFailure = (error) => ({ type: GET_USER_FAILURE, error });

//clearing user
export const clearUserRequest = () => ({ type: CLEAR_USER });

//async action creators

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  let users;
  try {
    users = await users_api.fetchUsers();
    return dispatch(fetchUsersSuccess(users));
  } catch (err) {
    return dispatch(fetchUsersFailure(err));
  }
};

export const getUser = (id) => async (dispatch) => {
  dispatch(getUserRequest());
  let user;
  try {
    user = await users_api.getUser(id);
    return dispatch(getUserSuccess(user));
  } catch (err) {
    return dispatch(getUserFailure(err));
  }
};

export const clearUser = () => (dispatch) => {
  return dispatch(clearUserRequest());
};
