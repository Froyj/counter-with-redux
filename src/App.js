import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer></CounterContainer>
      </div>
    );
  }
}

export default App;
