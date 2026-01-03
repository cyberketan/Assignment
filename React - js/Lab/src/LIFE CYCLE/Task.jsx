import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        });
      })
      .catch((error) => {
        this.setState({
          error: "Failed to fetch data",
          loading: false
        });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
