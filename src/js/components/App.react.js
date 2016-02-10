import React from 'react';
import { Link } from 'react-router';

import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';

/**
 * Fetch state for AppStore.
 * @return {object} state
 */
function getAllState() {
  return AppStore.getState();
};

export default React.createClass({

  getInitialState() {
    return getAllState();
  },

  componentDidMount() {

    // Set up our change listener.
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {

    // Remove change listener if un-mounting App.
    AppStore.removeChangeListener(this._onChange);
  },

  /**
   * Render the App component.
   * @return {object}
   */
  render() {
    return (
      <div className="app-wrapper">
        <h1>React / Flux Boilerplate</h1>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/about">About</Link>
        {this.props.children ? React.cloneElement(this.props.children, {state: this.state}) : null}
        
        <div>
          <button onClick={this._onClickExample}>Action example</button>
        </div>
      </div>
    );
  },

  /**
   * Example click handler, calling an action.
   */
  _onClickExample() {
    AppActions.exampleAction();
  },

  /**
   * Event handler for 'change' events coming from the GameStore
   */
  _onChange() {
    // Re-fetch App state on change.
    this.setState(getAllState());
  }

});
