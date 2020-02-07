import React from "react";
import "./App.css";
import SignInSide from "./containers/SignIn";
import HomepageLayout from "./containers/HomepageLayout";
import AboutLayout from "./containers/AboutLayout"
import MembersLayout from "./containers/MembersLayout"
import EventsLayout from "./containers/EventsLayout"
import RestaurantsLayout from "./containers/RestaurantsLayout"
import SignUp from "./containers/SignUp"
// import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import CreateProfileForm from "./components/CreateProfileForm";
import NavBar from "./components/NavBar";

// import DesktopContainer from './components/NavBar'

class App extends React.Component {

  state= {
    jwt:"",
    user_id: "",
    isLoggedIn: false
  }
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

    // fetch("http://localhost:4000/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       username: "lisa2",
    //       password: "hi",
    //       email: "b@gmail.com"
    //     }
    //   })
    // })
    //   .then(r => r.json())
    //   .then(console.log);
    
    this.setState({
      jwt: window.localStorage.jwt,
      user_id: window.localStorage.user_id
      
      }
    )
  }


  



  render() {
    var hist = createBrowserHistory();
     
    return (
      <Router history={hist}>
       <NavBar user_id={this.state.user_id}  />
        <Switch>
          <Route exact path="/" component={HomepageLayout} />
          <Route exact path="/about" component={AboutLayout} />
          <Route exact path="/restaurants" component={RestaurantsLayout} />
          <Route exact path="/events" component={EventsLayout} />
          <PrivateRoute path='/members' component={MembersLayout} />
          <Route exact path="/login" component={SignInSide} />
          {/* // component={SignInSide} handleLogin={this.handleLogin}/> */}
          <Route exact path="/signup" component={SignUp}  />
          <Route exact path="/create-profile" component={CreateProfileForm} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      localStorage.length === 0
        ? <Redirect to='/login' />
        : <Component {...props} />
    )} />
)