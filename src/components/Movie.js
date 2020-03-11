import React, { useState, useEffect } from 'react';
import './scss/Movie.scss';
import { Link } from 'react-router-dom';

const BASEURL = "https://api.themoviedb.org/3/movie/";
const ENDURL = "?api_key=16c19602a7121938cf7c160b35c37cea&language=en-US";
const IMGURL = "http://image.tmdb.org/t/p/";
const POSTERSIZES = {
  posterSizes: [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"] 
};
function Movie({ match }) {
  const movieId = match.params.id;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getMovie(movieId);
  }, []);

  const [movie, setMovie] = useState([]); // the useState hook is a way to provide state to functional components

  const getMovie = async (id) => {    
    let movie = await fetch(`${BASEURL}${id}${ENDURL}`).then(res => res.json());
    console.log(movie)
    setMovie(movie);
  }

  return (    
      <div className="movie-container" >
        <div className="movie-overlay" style={{backgroundImage: `url(${IMGURL}w1280${movie.backdrop_path})` }}></div>
        <div className="movie-content" style={{backgroundImage: `url(${IMGURL}w1280${movie.backdrop_path})` }}>
          <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          {/* <img src={`${IMGURL}w342${movie.poster_path}`}/>   */}
          </div>
          
          
        </div>       
      </div>
    
  );
}





export default Movie;