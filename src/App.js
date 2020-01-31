import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./views/Login/Login"

class App extends React.Component {
  componentDidMount() {
    // fetch('http://localhost:4000/profiles/1', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept' : 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => this.setState({profile: data.profile, avatar: data.avatar}))

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: "lisa1",
          password: "hi",
          email: "b@gmail.com"
        }
      })
    })
      .then(r => r.json())
      .then(console.log);
  }

  render() {
    return (
      <div>
        {/* <img src={`http://localhost:4000/${this.state.avatar}`}/> */}
        <LoginForm />
      </div>
    );
  }
}

export default App;
