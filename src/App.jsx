import Movies from './assets/components/Moviedata';
import './App.css'
import {MovieCard} from './assets/components/MovieCard'

function App() {
  

  return (
    <>
      <MovieCard movies={Movies}></MovieCard>
    </>
  )
}

export default App
