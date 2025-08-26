import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'   // ✅ tuodaan Notification

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />   {/* ✅ näytetään notifikaatio */}
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App
