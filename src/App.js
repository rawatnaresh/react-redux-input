import React, { Component } from 'react';
import './App.css';
import InputMirror from './InputMirror';
import store from './store';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      //Provider provides the props to all its descendants
      <Provider store={store}>
      <div className="App">
        <InputMirror  />
      </div>
       </Provider>
    );
  }
}

export default App;
