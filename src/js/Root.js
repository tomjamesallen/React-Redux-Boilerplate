import React, { PropTypes, Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
// import shallowequal from 'shallowequal'
// import clone from 'clone'

// import RouteValidator from './utils/RouteValidator'

import App from './components/App.react'
import Home from './components/Home.react'
import About from './components/About.react'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route name='home' path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route name='about' path='/about' component={About}/>
        </Route>
      </Router>
    )
  }
}
