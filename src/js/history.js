import { createHistory, createHashHistory } from 'history';

const useHash = process.env.NODE_ENV === 'development' ? false : true;

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