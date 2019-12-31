import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
    </div>
  );
}

export default App;
