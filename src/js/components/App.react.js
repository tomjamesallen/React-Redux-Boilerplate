import React from 'react';
import { Link } from 'react-router';
import transitionManager from '../transitionManager';

// Create APP component.
var App = React.createClass({

  /**
   * Render the APP component.
   * @return {object}
   */
  render() {
    console.log(this);
    return (
      <div className="guess-face-app">
        <h1>Guess Face</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
});

module.exports = App;