import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationSlice'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.trim() === '') return

    // luodaan uusi anekdootti backendin kautta
    dispatch(createAnecdote(content))

    // näytetään ilmoitus 5 sekunniksi
    dispatch(setNotification(`You created: "${content}"`, 5))

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
