import React from "react"
import PropTypes from "prop-types"
import "./Movie.css"
import { Link } from "react-router-dom"

function Movie({ id, year, title, summary, genres, poster }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            genres,
            poster
          }
        }}
      >
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">
            {title}({year})
          </h3>
          <h5 className="movie__genres">{genres.map(GenresLi)}</h5>
          <p className="movie__summary">{summary.slice(0, 200)}...</p>
        </div>
      </Link>
    </div>
  )
}

function GenresLi(genre, index) {
  return (
    <li key={index} className="genres__genre">
      {genre}
    </li>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie
