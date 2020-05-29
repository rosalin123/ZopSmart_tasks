import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { connect } from 'react-redux';

class User extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
  };

  render() {
    let { id } = this.props.match.params;

    let user = this.props.users.filter((user) => user.id === Number(id));

    return (
      <div>
        {user.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.email}</p>
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

export default connect(mapStateToProps, { fetchUsers })(User);
