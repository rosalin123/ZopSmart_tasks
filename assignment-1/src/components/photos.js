import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbumPhotos } from '../actions/albumActions';

class Photos extends Component {
  componentDidMount = () => {
    this.props.fetchAlbumPhotos(this.props.match.params.id);
  };

  render() {
    return <h1>Photos</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.Photos,
  };
};

export default connect(mapStateToProps, {
  fetchAlbumPhotos,
})(Photos);
