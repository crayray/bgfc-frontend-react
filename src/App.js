import React from "react";
import "./App.css";
import SignInSide from "./components/SignIn";
import HomepageLayout from "./containers/HomepageLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// import DesktopContainer from './components/NavBar'

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
          username: "lisa2",
          password: "hi",
          email: "b@gmail.com"
        }
      })
    })
      .then(r => r.json())
      .then(console.log);
  }

  render() {
    var hist = createBrowserHistory();
    return (
     
      // <div>
      // <HomepageLayout/>
      // {/* <DesktopContainer/> */}
      //   <SignInSide/>
      //   {/* <Button type="primary">Button</Button> */}
      //   {/* <img src={`http://localhost:4000/${this.state.avatar}`}/> */}
      // </div>
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={HomepageLayout} />
          <Route exact path="/about" component={SignInSide} />
          <Route exact path="/restaurants" component={SignInSide} />
          <Route exact path="/events" component={SignInSide} />
          <Route exact path="/members" component={SignInSide} />
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/signup" component={SignInSide} />
          {/* <Route path="/profile-page" component={ProfilePage} /> */}
          {/* <Route path="/login-page" component={LoginPage} /> */}
          {/* <Route path="/" component={Components} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
