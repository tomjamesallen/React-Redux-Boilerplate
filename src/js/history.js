import { browserHistory, hashHistory } from 'react-router'

// Whether to use hash history.
const useHash = process.env.NODE_ENV !== 'development'

// Create appropriate history.
const history = useHash ? hashHistory : browserHistory

// Import transitionManager.
import transitionManager from './transitionManager'

// Call transitionManager before transitioning to allow for hooks to delay
// transition.
history.listenBefore(function(transition, callback) {
  transitionManager.makeCall(callback, {
    payload: {
      transition: transition
    }
  })
})

export default history
