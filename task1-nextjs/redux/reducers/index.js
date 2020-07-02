import { combineReducers } from 'redux';
import Posts from './postsReducer';
import Post from './singlePostReducer';
import Users from './usersReducer';
import User from './userReducer';
import Comments from './commentsReducer';
import UserPosts from './userPostsReducer';

export default combineReducers({
  Posts,
  Post,
  Users,
  User,
  Comments,
  UserPosts,
});
