import { createHistory, createHashHistory } from 'history';

// Whether to use hash history.
const useHash = process.env.NODE_ENV === 'development' ? false : true;

// Create appropriate history.
const history = useHash ?
  createHashHistory() :
  createHistory();

// Import transitionManager.
import transitionManager from './transitionManager';

// Call transitionManager before transitioning to allow for hooks to delay
// transition.
history.listenBefore(function (transition, callback) {
  transitionManager.makeCall(callback, {
    payload: {
      transition: transition
    }
  });
});

export default history;
