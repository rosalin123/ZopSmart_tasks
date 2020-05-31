const baseUrl =
  'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com';

export const fetchAlbums = async () => {
  let url = `${baseUrl}/albums`;
  try {
    const albums = await fetch(url, { method: 'GET' });
    const albumsJson = await albums.json();
    return albumsJson;
  } catch (err) {
    console.log('Error fetching albums', err.stack);
  }
};

export const fetchAlbumPhotos = async (id) => {
  let url = `${baseUrl}/photos?albumId=${id}`;
  try {
    const photos = await fetch(url, { method: 'GET' });
    const photosJson = await photos.json();
    return photosJson;
  } catch (err) {
    console.log('Error fetching photos', err.stack);
  }
};
