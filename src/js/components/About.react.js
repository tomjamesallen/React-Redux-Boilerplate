import React from 'react';
import { Link } from 'react-router';
import transitionManager from '../transitionManager';

// Create APP component.
var About = React.createClass({

  // Transition hook.
  _transitionHookId: null,
  _transitionHook(call) {
    console.log(call);
    setTimeout(function () {
      call.resolve();
    }, 500);
  },
  
  componentDidMount() {
    this._transitionHookId = transitionManager.registerHook(this._transitionHook);
  },

  componentWillUnmount() {
    transitionManager.unregisterHook(this._transitionHookId);
  },

  /**
   * Render the APP component.
   * @return {object}
   */
  render() {
    // console.log(this);
    return (
      <div className="about">
        <h2 className="about__heading">About</h2>
        <p>Guess face is a game where one guesses faces.</p>
      </div>
    );
  }
});

module.exports = About;