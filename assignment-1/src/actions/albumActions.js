import { FETCH_ALBUMS, FETCH_ALBUM_PHOTOS, CLEAR_PHOTOS } from './types';
import * as album_api from '../util/album_api_util';

const fetch_albums = (albums) => ({ type: FETCH_ALBUMS, albums });

const fetch_album_photos = (photos) => ({ type: FETCH_ALBUM_PHOTOS, photos });

const clear_posts = () => ({ type: CLEAR_PHOTOS });

export const fetchAlbums = () => async (dispatch) => {
  let albums = await album_api.fetchAlbums();
  dispatch(fetch_albums(albums));
};

export const fetchAlbumPhotos = (id) => async (dispatch) => {
  let photos = await album_api.fetchAlbumPhotos(id);
  dispatch(fetch_album_photos(photos));
};

export const clearPhotos = () => async (dispatch) => {
  dispatch(clear_posts());
};
