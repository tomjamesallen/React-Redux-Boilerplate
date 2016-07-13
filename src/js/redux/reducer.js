import { combineReducers } from 'redux'
import counter from './modules/counter'
import githubUser from './modules/githubUser'

export default combineReducers({
  counter,
  githubUser
})
