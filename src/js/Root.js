import React, { PropTypes, Component } from 'react'
import { Router, Route } from 'react-router'
import shallowequal from 'shallowequal'
import clone from 'clone'

import RouteValidator from './utils/RouteValidator'
import RouteActions from './actions/RouteActions'

let prevRouteState

function routeChanged(prev, next) {
  if (!prev) return true
  if (prev.location.pathname !== next.location.pathname) return true
  if (!shallowequal(prev.location.query, next.location.query)) return true
  return
}

function onRouteEvent(next) {
  if (!routeChanged(prevRouteState, next)) return

  if (routeValidator.validator(next)) {
    emitRouteAction(next)
    prevRouteState = clone(next)
  }
}

var routeValidator = RouteValidator([
  function(next, replace) {
    // const params = next.params

    // if (!valid) {
    //   replace('/')
    //   return
    // }

    return true
  }
])

function emitRouteAction(next) {
  const { location, params } = next
  RouteActions.onRouteUpdated(location, params)
}


import App from './components/App.react'
import About from './components/About.react'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  onUpdate() {
    const { location, params } = this.state
    onRouteEvent({
      location, params
    })
  }

  render() {
    const { history } = this.props
    return (
      <Router history={history} onUpdate={this.onUpdate}>
        <Route name='home' path='/' component={App} onEnter={onRouteEvent}>
          <Route name='about' path='/about' component={About} onEnter={onRouteEvent}/>
        </Route>
      </Router>
    )
  }
}
