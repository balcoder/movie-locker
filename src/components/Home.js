import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './scss/MovieGallery.scss'

const baseUrlW92 = "http://image.tmdb.org/t/p/w92/"
const baseUrlW154 = "http://image.tmdb.org/t/p/w154/"
const baseUrlW185 = "http://image.tmdb.org/t/p/w185/"

class Home extends Component {
  render() {
    let movies = this.props.popular.map((movie) => {
      return (       
        <li 
        className="gallery-item"
        key={movie.id}
        > 
          <Link to={`/movie/${movie.id}`}>
          <img
            src={`${baseUrlW154}${movie.poster_path}`}
            className="gallery-img"
            />
          <p className="gallery-caption">{movie.original_title}</p>            
          </Link>       
          
        </li>        
        );
    });

    return (
      <div className="movie-gallery">
         <ul className="gallery">
         {movies}
         </ul>
        
      </div>
    );
  }
}

export default Home;