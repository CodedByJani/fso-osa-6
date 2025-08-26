import { useDispatch } from 'react-redux'
import { createAnecdoteThunk } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationSlice'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.trim() === '') return

    dispatch(createAnecdoteThunk(content)) // ✅ backendiin tallennus
    dispatch(showNotification(`You created: "${content}"`, 5000)) // ✅ notifikaatio 5 sekunniksi
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
