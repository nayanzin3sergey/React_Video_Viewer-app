import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import ViewVideo from './components/ViewVideo'
import PhotoGallery from './components/PhotoGallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          < SignIn />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>

        < Welcome />
        < ViewVideo />
        < PhotoGallery />

      </div>
    );
  }
}

export default App;
