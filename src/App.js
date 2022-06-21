import './App.css'
import Landing from './pages/Landing'
import YouTube from './components/YouTube'
import Movie from './components/Movie'
import Practice from './components/Practice'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="movie" element={<Movie />} />
        <Route path="practice" element={<Practice />} />
      </Routes>
    </div>
  )
}

export default App
