import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import transitionManager from '../transitionManager';

// Create About component.
export default Radium(React.createClass({

  // Transition hook example.
  // _transitionHookId: null,
  // _transitionHook(call) {
  //   setTimeout(function () {
  //     call.resolve();
  //   }, 500);
  // },
  
  // componentDidMount() {
  //   this._transitionHookId = transitionManager.registerHook(this._transitionHook);
  // },

  // componentWillUnmount() {
  //   transitionManager.unregisterHook(this._transitionHookId);
  // },

  /**
   * Render the About component.
   * @return {object}
   */
  render() {
    return (
      <div className="about">
        <h2 className="about__heading">About</h2>
        <p>An about page</p>
      </div>
    );
  }

}));
