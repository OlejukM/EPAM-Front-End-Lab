import React, { Component } from 'react';
import { render } from 'react-dom';

// Entry point for styles
import './scss/index.scss';

// Get the root node
const rootNode = document.querySelector('#root');

// Entry point for the application
class App extends Component {
  render() {
    return 'It works!';
  }
} ;

render(
  <App />,
  rootNode,
);
