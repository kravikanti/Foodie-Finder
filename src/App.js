import React, { Component } from 'react';
import ReactDOM from 'react';
import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

const user = {
  firstName: 'Kavya',
  lastName: 'Ravikanti'
};

function formatName(name) {
  return name.firstName + ' ' + name.lastName;
}

class App extends Component {
  render() {
  return(
    <h1> Welcome to Foodie Finder! </h1>
  );
  }
}



export default App;
