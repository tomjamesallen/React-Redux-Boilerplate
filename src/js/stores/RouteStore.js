// App imports.
import AppDispatcher from '../dispatcher/AppDispatcher'
import EventEmitter from 'events'

// Helpers.
import assign from 'object-assign'

// Constants.
const CHANGE_EVENT = 'change'

function getInitialState() {
  return {
    route: {}
  }
}

// Create state var and set to initial state.
var state = getInitialState()

/**
 * Update the current route.
 */
function onRouteUpdated(location, params) {
  state.route = {
    location,
    params
  }

  RouteStore.emitChange()
}

/**
 * Create and export the AppAppStore.
 */
var RouteStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the full game state.
   * @return {object}
   */
  getRoute() {
    return state.route
  },

  /**
   * Used in the functions above to trigger an update to the UI.
   */
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
})

/**
 * Register callback to handle all updates.
 */
RouteStore.dispatchToken = AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'onRouteUpdated':
      onRouteUpdated(action.location, action.params)
      break

    default:
  }
})

export default RouteStore
