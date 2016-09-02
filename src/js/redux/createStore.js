import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function(reducer) {
  return createStore(
    reducer,
    applyMiddleware(thunk)
  )
}
