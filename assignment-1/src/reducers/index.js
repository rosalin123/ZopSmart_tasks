import { combineReducers } from 'redux';
import Posts from './postsReducer';
import Users from './usersReducer';
import Comments from './commentsReducer';

export default combineReducers({ Posts, Users, Comments });
