import React from 'react'
import { useState } from 'react'

const Movie = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const movieApi = (search) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=dd80d4093c52a1f44c0690a18568bd3b`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input placeholder="Movie" value={search} onChange={handleChange}></input>
      <button onClick={() => movieApi(search)}>Search</button>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Movie
