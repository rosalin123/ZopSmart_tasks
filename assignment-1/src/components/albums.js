import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, clearPhotos } from '../actions/albumActions';
import { fetchUsers } from '../actions/userActions';
import Album from './album';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  headerStyles: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
};

class Albums extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
    this.props.fetchAlbums();
    this.props.clearPhotos();
  };

  render() {
    let usernames = [];
    usernames = this.props.users.reduce((arr, user) => {
      arr[user.id] = user.username;
      return arr;
    }, []);

    const { classes } = this.props;

    return (
      <div>
        <Grid container direction="column">
          <Grid item className={classes.headerStyles}>
            Albums
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={3}
              className={classes.root}
              justify="center"
            >
              {this.props.albums.map((album, index) => {
                return (
                  <Grid item key={index}>
                    <Album
                      title={album.title}
                      username={usernames[album.userId]}
                      id={album.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.Albums,
    users: state.Users.items,
  };
};

export default connect(mapStateToProps, {
  fetchAlbums,
  fetchUsers,
  clearPhotos,
})(withStyles(styles)(Albums));
