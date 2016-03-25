import transitionManager from '../transitionManager'

export default function(transitionHook) {
  var _transitionHookId = null

  return {
    componentDidMount() {
      _transitionHookId = transitionManager.registerHook(transitionHook)
    },

    componentWillUnmount() {
      transitionManager.unregisterHook(_transitionHookId)
    }
  }
}
