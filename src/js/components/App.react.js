import React from 'react';
import { Link } from 'react-router';

// Create APP component.
var App = React.createClass({

  getInitialState() {
    return {}
  },

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
        {this.props.children ? React.cloneElement(this.props.children, {state: this.state}) : null}
      </div>
    );
  }
});

module.exports = App;