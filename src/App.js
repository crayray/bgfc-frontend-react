import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  

  componentDidMount(){
    fetch('http://localhost:4000/profiles/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({profile: data.profile, avatar: data.avatar}))
  }

  render() {
    return (
      <div>
      
        {/* <img src={`http://localhost:4000/${this.state.avatar}`}/> */}
      </div>
    )
  }
  
}

export default App;
