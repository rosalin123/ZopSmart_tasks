import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import UserComponent from './UserComponent';
import { withStyles } from '@material-ui/core/styles';

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
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={3} direction="column" className={classes.root}>
        {this.props.users.map((user, index) => {
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
  users: state.Users.items,
});

export default connect(mapStateToProps, { fetchUsers })(
  withStyles(styles)(Users)
);
