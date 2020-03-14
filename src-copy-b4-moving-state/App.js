import React, { Component } from 'react';
import {  
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Content from './Content';
import Footer from  './Footer';
import * as apiCalls from './api';
import './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      popular: [],
      genreIds: [],
      
    };
    this.onGenreClick = this.onGenreClick.bind(this);
  }

  // get list of genres with their ids
  async loadGenreIds() {
    try {
      let genreIds = await apiCalls.getGenre();
      console.log('genreIds:::',genreIds)                 
      this.setState({genreIds: genreIds.genres});
    } catch (err) {
      console.error(err)
    }
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
  

  async loadPopular() {
    try {
      let popular =  await apiCalls.getPopular();      
      this.setState({popular: popular});
    } catch (err) {
      console.error(err);
    }
  }

  onGenreClick(e) {
    let genreId = e.target.getAttribute('data-genre-id');
    this.loadGenresWithIds(genreId);
  }
  

    componentDidMount() {
      // this.loadGenresWithIds();
      this.loadPopular();
      this.loadGenreIds();
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content
        // onGenreClick={this.onGenreClick}
        genreIds={this.state.genreIds}
       // genres={this.state.genres}
        popular={this.state.popular}
        />
        <Footer />
      </div>
    );

  }
 
}





export default App;
