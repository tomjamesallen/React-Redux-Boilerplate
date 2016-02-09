import React from 'react';
import { Link } from 'react-router';
import transitionManager from '../transitionManager';

// Create APP component.
export default React.createClass({

  // Transition hook.
  _transitionHookId: null,
  _transitionHook(call) {
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
    return (
      <div className="about">
        <h2 className="about__heading">About</h2>
        <p>Guess face is a game where one guesses faces.</p>
      </div>
    );
  }
});
