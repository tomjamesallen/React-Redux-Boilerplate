import fetch from 'isomorphic-fetch'
import assign from 'object-assign'

const REQUEST_USER = 'redux-example/githubUser/REQUEST_USER'
const RECEIVE_USER = 'redux-example/githubUser/RECEIVE_USER'

const initialState = {
  isFetching: false,
  user: null,
  userData: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_USER:
      return assign({}, state, {
        isFetching: true,
        user: action.user
      })
    case RECEIVE_USER:
      const userData = action.userData.name
                        ? action.userData
                        : {}
      return assign({}, state, {
        isFetching: false,
        user: action.user,
        userData,
        lastUpdated: action.receivedAt,
        notFound
      })
    default:
      return state
  }
}

function requestUser(user) {
  return {
    type: REQUEST_USER,
    user
  }
}

function receiveUser(user, userData) {
  return {
    type: RECEIVE_USER,
    user,
    userData,
    receivedAt: Date.now()
  }
}

export function fetchUser(user) {
  return (dispatch) => {
    dispatch(requestUser(user))
    return fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveUser(user, json)))
  }
}
