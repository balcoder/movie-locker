import React, { Component } from 'react';
import './scss/MovieGallery.scss'
import { Link } from 'react-router-dom';
import * as apiCalls from './api';

const baseUrlW92 = "http://image.tmdb.org/t/p/w92/"
const baseUrlW154 = "http://image.tmdb.org/t/p/w154/"
const baseUrlW185 = "http://image.tmdb.org/t/p/w185/"

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []      
    };
    
  }
  
  // get a list of movies with a genre id
  async loadGenresWithIds(id) {
    try {
      let genreList =  await apiCalls.getGenres(id); 
      console.log("This is it:::::",id, genreList)     
      this.setState({genres: genreList.results});
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
  this.loadGenresWithIds(this.props.params.id);
   
  }
 
  render() { 
    //console.log("Genre ID::",this.props.match.params.id);  
    let movies = this.state.genres.map((movie) => {
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

export default MovieGallery;