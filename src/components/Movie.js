import React from 'react'

const Movie = () => {
  fetch(`https://api.themoviedb.org/3?api_key=dd80d4093c52a1f44c0690a18568bd3b`)
    .then((res) => res.json())
    .then((data) => console.log(data))

  return (
    <div>
      <input></input>
      <button>Search</button>
    </div>
  )
}

export default Movie
