import React, { PropTypes } from 'react'

const Counter = ({
  count,
  onClick
}) => (
  <div>
    <h2>Current value: {count}</h2>
    <button onClick={onClick}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

Counter.defaultProps = {
  onClick() {}
}

export default Counter
