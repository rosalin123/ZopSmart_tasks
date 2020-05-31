import { combineReducers } from 'redux';
import Posts from './postsReducer';
import Users from './usersReducer';
import Comments from './commentsReducer';
import UserPosts from './userPostsReducer';

export default combineReducers({ Posts, Users, Comments, UserPosts });
