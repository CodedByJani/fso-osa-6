import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={() => dispatch({ type: 'OK' })}>ok</button>
      <button onClick={() => dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => dispatch({ type: 'ZERO' })}>reset stats</button>

      <h2>Statistics</h2>
      <div>good {state.good}</div>
      <div>ok {state.ok}</div>
      <div>bad {state.bad}</div>
    </div>
  )
}

export default App
