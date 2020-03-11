import React, { Component } from 'react';
import './scss/MovieGallery.scss'
import { Link } from 'react-router-dom';
import * as apiCalls from './api';

const baseUrlW92 = "http://image.tmdb.org/t/p/w92/"
const baseUrlW154 = "http://image.tmdb.org/t/p/w154/"
const baseUrlW185 = "http://image.tmdb.org/t/p/w185/"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: []      
    };
    
  }
  
  async loadPopular() {
    try {
      let popular =  await apiCalls.getPopular();      
      this.setState({popular: popular.results});
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
  this. loadPopular(this.props.params.id);
   
  }
 
  render() {   
    
    let movies = this.state.popular.map((movie) => {
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