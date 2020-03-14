import React, { Component } from 'react';
import './scss/MovieGallery.scss'
import { Link } from 'react-router-dom';
import getPage from './helper';
import * as apiCalls from './api';

const baseUrlW92 = "http://image.tmdb.org/t/p/w92/"
const baseUrlW154 = "http://image.tmdb.org/t/p/w154/"
const baseUrlW185 = "http://image.tmdb.org/t/p/w185/"

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      numPages: 5,
      currentPage: 1,
      currentView: []      
    };

     this.handleClickPage = this.handleClickPage.bind(this);
  }
  
  // get a list of movies with a genre id
  async loadGenresWithIds(id) {
    try {
      let genreList =  await apiCalls.getGenres(id);
      console.log( 'genreList',genreList);        
      this.setState({genres: genreList});
    } catch (err) {
      console.error(err);
    }
  }

  handleClickPage(e) {
    let pageNum = e.target.id
    let nextView = getPage(pageNum, this.state.genres)
    
    this.setState({currentPage: pageNum, currentView: nextView});
  }

  

  componentDidMount() {
  this.loadGenresWithIds(this.props.params.id);
   
  }

  renderPagelinks() {
    let pageNumbers = [];
    for(let i = 1; i <= this.state.numPages; i++) {
      pageNumbers.push(
        <li
        key={i}
        id={i}
        onClick={this.handleClickPage}
      >{i}</li>
      )
    }
    return (pageNumbers);
  }
 
  render() {    
   // this.loadGenresWithIds(this.props.params.id);
    let movies = this.state.currentView.map((movie) => {
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
         <ul className="pageLinks">
           {this.renderPagelinks()}
         </ul>
        
      </div>
    );
  }
}

export default MovieGallery;