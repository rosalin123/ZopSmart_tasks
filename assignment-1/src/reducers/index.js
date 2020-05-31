import { combineReducers } from 'redux';
import Posts from './postsReducer';
import Users from './usersReducer';
import Comments from './commentsReducer';
import UserPosts from './userPostsReducer';
import Albums from './albumsReducer';
import Photos from './photosReducer';

export default combineReducers({
  Posts,
  Users,
  Comments,
  UserPosts,
  Albums,
  Photos,
});
