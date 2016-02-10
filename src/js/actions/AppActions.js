/*
 * AppActions
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

export default {

  exampleAction() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.EXAMPLE_ACTION
    });
  }

};