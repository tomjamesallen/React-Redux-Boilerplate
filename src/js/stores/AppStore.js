// App imports.
import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import history from '../history';

// Helpers.
import assign from 'object-assign';
import jsonAjaxHelper from '../helpers/jsonAjaxHelper';

// Constants.
import ActionTypes from '../constants/ActionTypes';
const CHANGE_EVENT = 'change';

// Get ENV.
const ENV = process.env.NODE_ENV;

function getInitialState() {
  return {
    
  }
};

// Create state var and set to initial state.
var state = getInitialState();


/**
 * Create and export the AppAppStore.
 */
var AppStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the full game state.
   * @return {object}
   */
  getState() {
    return state;
  },

  /**
   * Used in the functions above to trigger an update to the UI.
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
 * Register callback to handle all updates.
 */
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.EXAMPLE_ACTION:
      console.log('Action Fired:', ActionTypes.EXAMPLE_ACTION);
      
      break;      

    default:
  }
});

export default AppStore;
