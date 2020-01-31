import React from "react";
import "./App.css";
import SignInSide from "./containers/SignIn";
import HomepageLayout from "./containers/HomepageLayout";
import AboutLayout from "./containers/AboutLayout"
import MembersLayout from "./containers/MembersLayout"
import EventsLayout from "./containers/EventsLayout"
import RestaurantsLayout from "./containers/RestaurantsLayout"
import SignUp from "./containers/SignUp"
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
          <Route exact path="/about" component={AboutLayout} />
          <Route exact path="/restaurants" component={RestaurantsLayout} />
          <Route exact path="/events" component={EventsLayout} />
          <Route exact path="/members" component={MembersLayout} />
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
