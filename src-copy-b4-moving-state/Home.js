import React, { Component } from 'react';
import './scss/MovieGallery.scss'
import { Link } from 'react-router-dom';
import getPage from './helper';
import * as apiCalls from './api';

const baseUrlW92 = "http://image.tmdb.org/t/p/w92/"
const baseUrlW154 = "http://image.tmdb.org/t/p/w154/"
const baseUrlW185 = "http://image.tmdb.org/t/p/w185/"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
      currentView: [], 
      currentPage: 1,
      numPages: 10
    };
    
    this.handleClickPage = this.handleClickPage.bind(this);
  }
  
  async loadPopular() {
    try {
      let popular =  await apiCalls.getPopular();
      let currentView =  getPage(this.state.currentPage, popular)      
      this.setState({popular: popular, currentView: currentView});
      
    } catch (err) {
      console.error(err);
    }
  }

  // getPage(pageNum, arr) {
  //   let pageResult = arr.find(val => val.page === parseInt(pageNum, 10));
  //   console.log(pageResult);
  //   return pageResult.results;
  // }

  handleClickPage(e) {
    let pageNum = e.target.id
    let nextView = getPage(pageNum, this.state.popular)
    
    this.setState({currentPage: pageNum, currentView: nextView});
  }

  // async loadPopular() {
  //   try {
  //     let results =  await apiCalls.getPopular();
  //     console.log(results);      
  //     let popular = [];
  //     results.forEach(val => {        
  //       val.results.forEach(movie => {
  //         if(!movie.poater_path){
  //           popular.push(movie);
  //         }         
  //       })       
  //     })     
  //     this.setState({popular: popular});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // loadCurrentView(pageNum) {
  //   console.log(this.state.popular);
  //   //let moviesWithImg =  this.state.popular[pageNum -1].results.filter(val => val.poster_path !== null );
  //   //let pageResult = moviesWithImg.find(val => val.page === pageNum);
  //   //console.log(pageResult);
  // }

  componentDidMount() {
  this.loadPopular(this.props.params.id);
  // console.log(this.state.popular);
  // this.loadCurrentView(1)
   
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

export default Home;