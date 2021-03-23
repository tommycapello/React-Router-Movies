import React from 'react';
import { useHistory } from 'react-router-dom'

export default function MovieList(props) {

  const { movies } = props

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
            <MovieDetails movie={movie} to={`/movies/${movie.id}`}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  const history = useHistory()
  const routeToDets = () => {
    history.push(`/movies/${props.movie.id}`)
  }

  return (
    <div onClick={routeToDets}className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
