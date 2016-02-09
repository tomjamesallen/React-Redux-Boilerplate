import { createHistory, createHashHistory } from 'history';

const useHash = true;

const history = useHash ?
  createHashHistory() :
  createHistory();

import transitionManager from './transitionManager';

history.listenBefore(function (transition, callback) {
  transitionManager.makeCall(callback, {
    payload: {
      transition: transition
    }
  });
});

export default history;