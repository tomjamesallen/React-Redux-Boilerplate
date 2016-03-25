import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import ConnectToStores from '../mixins/ConnectToStores'
import AppStore from '../stores/AppStore'
import RouteStore from '../stores/RouteStore'
import AppActions from '../actions/AppActions'

// import ReactiveComponent from './ReactiveComponent.react'

function getState() {
  return {
    appState: AppStore.getState(),
    route: RouteStore.getRoute()
  }
}

var App = Radium(React.createClass({

  propTypes: {
    children: PropTypes.object
  },

  mixins: [ConnectToStores([AppStore, RouteStore], getState)],

  /**
   * Render the App component.
   * @return {object}
   */
  render() {
    var styles = {
      base: {
        width: '80%',
        margin: '0 auto'
      }
    }

    return (
      <div style={styles.base}>
        <h1>React / Flux Boilerplate</h1>
        <Link to='/'>Home</Link>
        {' '}
        <Link to='/about'>About</Link>
        {this.props.children ? React.cloneElement(this.props.children, {state: this.state}) : null}

        <div>
          <button onClick={this._onClickExample}>Action example</button>
        </div>
      </div>
    )
  },

  /**
   * Example click handler, calling an action.
   */
  _onClickExample() {
    AppActions.exampleAction()
  }

}))

export default App
