import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';

class Users extends Component {
  componentWillMount = () => {
    this.props.fetchUsers();
  };

  render() {
    return (
      <div>
        <h1>USERS</h1>

        {this.props.users.map((user, index) => {
          return (
            <div key={index}>
              {' '}
              <h3>Name: {user.name}</h3>
              <p>username: {user.username}</p>
              <p>email: {user.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.Users.items,
});

export default connect(mapStateToProps, { fetchUsers })(Users);
