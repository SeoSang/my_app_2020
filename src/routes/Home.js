import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    //we will fetch data in here
    this.getMovies()
  }

  renderMovies(movie) {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
        poster={movie.medium_cover_image}
      />
    )
  }

  render() {
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">{movies.map(this.renderMovies)}</div>
        )}
      </section>
    )
  }
}

export default Home
