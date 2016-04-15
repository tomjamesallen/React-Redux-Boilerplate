import React from 'react'
import Root from './Root'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('react-container')

import history from './history'

ReactDOM.render(<Root history={history} />, rootEl)
