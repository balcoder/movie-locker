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
      genreIds: []
    };
    
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
  async loadGenresWithIds() {
    try {
      let genreList =  await apiCalls.getGenres(27); 
      console.log("This is it:::::", genreList)     
      this.setState({genres: genreList.results});
    } catch (err) {
      console.error(err);
    }
  }

  // get array of objs {name, id, url} for each genre id
  // async loadGenreLists() {
  //   try {
  //     let genreLists =  await apiCalls.getGenre(27); 
  //     console.log("This is it:::::", genreList)     
  //     this.setState({genreList: genreList.results});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  

  async loadPopular() {
    try {
      let popular =  await apiCalls.getPopular();      
      this.setState({popular: popular.results});
    } catch (err) {
      console.error(err);
    }
  }
  

    componentDidMount() {
      this.loadGenresWithIds();
      this.loadPopular();
      this.loadGenreIds();
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content
        genreIds={this.state.genreIds}
        popular={this.state.popular}
        />
        <Footer />
      </div>
    );

  }
 
}





export default App;
