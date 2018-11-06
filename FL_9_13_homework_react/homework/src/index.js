import React, { Component } from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import { Music } from './music';

const rootNode = document.querySelector('#root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      trackLoading: false,
    };
  }

  componentDidMount() {
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => response.json())
      .then(data => this.setState({
        data,
        trackLoading: true,
      }));
  }

  handleIsPlaying() {
    this.setState(prevstate => ({
      isPlaying: !prevstate.isPlaying,
    }));
  }

  render() {
    const { trackLoading, data } = this.state;
    if (trackLoading === false) {
      return (
        <p>Loading tracks...</p>
      );
    }
    return (
      <div>
        <h1>Playlist</h1>
        <ul>
          { data.map(
            <li key={data.id}>
              <Music updateData={this.updateData} author={data.author} title={data.title} />
            </li>,
          )}
        </ul>
      </div>
    );
  }
}

render(
  <App />,
  rootNode,
);
