import React from 'react'

const Counter = ({
  count,
  onClick
}) => {
  return (
    <div>
      <h2>Current value: {count}</h2>
      <button onClick={onClick}>Increment</button>
    </div>
  )
}

export default Counter
