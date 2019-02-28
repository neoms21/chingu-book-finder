import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Dashbaord from './components/dashboard/dashboard';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashbaord />
      </div>
    );
  }
}

export default App;
