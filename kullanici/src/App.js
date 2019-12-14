import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users_ => { this.setState({ users : users_ }) })
  }


  render() {

    return (
      <div className="App">
        <h1>Kullanıcılar : </h1>
        <ul>
          {
            this.state.users.map(user =>
              <li key={user.id}>{user.username}</li>)              
          }
          {console.log(this.state.users)}
        </ul>
      </div>
    );
  }

}



export default App;
