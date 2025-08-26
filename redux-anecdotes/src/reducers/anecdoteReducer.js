import { createSlice } from '@reduxjs/toolkit'
import * as anecdotesService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    voteAnecdote(state, action) {
      const id = action.payload.id
      const anecdote = state.find(a => a.id === id)
      if (anecdote) {
        anecdote.votes = action.payload.votes
      }
    },
    createAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { setAnecdotes, voteAnecdote, createAnecdote } = anecdoteSlice.actions

// Thunkit
export const initializeAnecdotes = () => async dispatch => {
  const anecdotes = await anecdotesService.getAll()
  dispatch(setAnecdotes(anecdotes))
}

export const createAnecdoteThunk = (content) => async dispatch => {
  const newAnecdote = await anecdotesService.createNew(content)
  dispatch(createAnecdote(newAnecdote))
}

export const voteAnecdoteThunk = (anecdote) => async dispatch => {
  const updated = await anecdotesService.update(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 })
  dispatch(voteAnecdote(updated))
}

export default anecdoteSlice.reducer
