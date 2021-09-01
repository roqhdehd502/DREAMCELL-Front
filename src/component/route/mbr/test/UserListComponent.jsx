import React, { Component } from 'react';
import ApiService from "../../ApiService";

import {
  Table,
  Button,
} from 'react-bootstrap'; 

class UserListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      message: null
    }
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList = () => {
    ApiService.fetchUsers()
      .then(res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log('reloadUserList() Error!', err);
      })
  }

  deleteUser = (userID) => {
    ApiService.deleteUser(userID)
      .then(res => {
        this.setState({
          message: 'User Deleted Successfully.'
        });
        this.setState({
          users: this.state.users.filter(user =>
            user.id !== userID)
        });
      })
      .catch(err => {
        console.log('deleteUser() Error!', err);
      })
  }

  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    this.props.history.push('/edit-user');
  }

  addUser = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push('/add-user');
  }

  render() {
    return (
      <div>
        <h4>User List</h4>
        <Button onClick={this.addUser}>Add User</Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td onClick={() => this.editUser(user.id)}></td>
                <td onClick={() => this.deleteUser(user.id)}></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserListComponent;