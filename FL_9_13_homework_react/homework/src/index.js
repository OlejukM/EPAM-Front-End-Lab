import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import './scss/index.scss';
import { Music } from './music';

const rootNode = document.querySelector('#root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      trackLoading: false,
    };
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => response.json())
      .then(data => this.setState({
        info: data,
        trackLoading: true,
      }));
  }

  updateData(value) {
    this.props.getMusic(value);
  }

  handleIsPlaying() {
    this.setState(prevstate => ({
      isPlaying: !prevstate.isPlaying,
    }));
  }

  render() {
    const { trackLoading, info } = this.state;
    if (trackLoading === false) {
      return (
        <p>Loading tracks...</p>
      );
    }
    return (
      <div>
        <h1>Playlist</h1>
        <ul>
          { info.map(data => (
            <li key={data.id}>
              <Music
                updateData={this.updateData}
                author={data.author}
                poster={data.poster}
                title={data.title}
                mp3={data.mp3}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  getMusic: PropTypes.func.isRequired,
};

render(
  <App />,
  rootNode,
);
