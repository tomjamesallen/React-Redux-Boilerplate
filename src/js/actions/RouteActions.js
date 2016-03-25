/*
 * RouteActions
 */

import AppDispatcher from '../dispatcher/AppDispatcher'

export default {

  onRouteUpdated(location, params) {
    AppDispatcher.dispatch({
      actionType: 'onRouteUpdated',
      location,
      params
    })
  }

}
