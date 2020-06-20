import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import UserComponent from './UserComponent';
import { withStyles } from '@material-ui/core/styles';
import { clearUserPosts } from '../actions/postActions';
import Loader from './loader';
import ErrorComponent from './error';

const styles = {
  root: {
    paddingTop: '10px',
  },
  userStyles: {
    borderBottom: '1px solid lightgrey',
    background: 'white',
  },
};

class Users extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
    this.props.clearUserPosts();
  };

  render() {
    const { classes, users, loading, error } = this.props;
    return loading === true ? (
      <Loader />
    ) : error !== '' ? (
      <ErrorComponent message="Something's not right.." />
    ) : (
      <Grid container spacing={3} direction="column" className={classes.root}>
        {users.map((user, index) => {
          return (
            <Grid item key={index} className={classes.userStyles}>
              <UserComponent
                username={user.username}
                email={user.email}
                id={user.id}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.Users.loading,
  error: state.Users.error,
  users: state.Users.users,
});

export default connect(mapStateToProps, { fetchUsers, clearUserPosts })(
  withStyles(styles)(Users)
);
