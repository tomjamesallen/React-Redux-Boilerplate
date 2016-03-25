import AppStore from '../stores/AppStore'
import history from '../history'

export default function(rules) {
  var transitionId = 0
  var dataReady = AppStore.isDataReady()
  var cachedTransitions = []

  function handleStoresChanged() {
    dataReady = AppStore.isDataReady()
    retryCachedTransitions()
  }

  function testRules(next) {
    rules.forEach((rule) => rule(next, history.replace))
  }

  function retryCachedTransitions() {
    if (!dataReady) return

    cachedTransitions.forEach((transition) => {
      if (transition.transitionId === transitionId) {
        testRules(transition.next)
      }
    })

    cachedTransitions = []
  }

  AppStore.addChangeListener(handleStoresChanged)

  return {
    validator(next) {
      transitionId++
      const thisTransitionId = transitionId

      if (dataReady) testRules(next)
      else {
        cachedTransitions.push({
          next,
          transitionId: thisTransitionId
        })
      }

      return true
    },

    destroy() {
      AppStore.removeChangeListener(handleStoresChanged)
    }
  }
}
