import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const dispatchGood = () => store.dispatch({ type: 'GOOD' })
  const dispatchOk = () => store.dispatch({ type: 'OK' })
  const dispatchBad = () => store.dispatch({ type: 'BAD' })
  const dispatchReset = () => store.dispatch({ type: 'ZERO' })

  const state = store.getState()

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={dispatchGood}>good</button>
      <button onClick={dispatchOk}>ok</button>
      <button onClick={dispatchBad}>bad</button>
      <button onClick={dispatchReset}>reset stats</button>

      <h2>Statistics</h2>
      <div>good {state.good}</div>
      <div>ok {state.ok}</div>
      <div>bad {state.bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
