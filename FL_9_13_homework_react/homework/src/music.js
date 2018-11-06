import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scss/index.scss';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.author,
      title: this.props.title,
      isPlaying: false,
    };
  }

  handleIsPlaying() {
    this.setState(prevstate => ({ isPlaying: !prevstate.isPlaying }));
  }

  render() {
    const { author, title, isPlaying } = this.state;
    return (
      <div role="button" tabIndex={0} onKeyDown={() => { this.props.updateData(this); }} onClick={() => { this.props.updateData(this); }}>
        <i role="button" tabIndex={0} onKeyDown={this.handleIsPlaying.bind(this)} onClick={this.handleIsPlaying.bind(this)} className="material-icons">{ isPlaying ? 'pause' : 'play_arrow' }</i>
        <div>
          <span>{ title }</span>
          <span>{ author }</span>
        </div>
      </div>
    );
  }
}

Music.propTypes = {
  updateData: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Music };
