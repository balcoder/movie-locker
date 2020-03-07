import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from  './Footer';
import * as apiCalls from './api';
import './scss/App.scss';
import { KEY } from './movie-locker.config';

let GENRES = {};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      popular: []
    };
    
  }

  async loadGenres() {
    try {
      let genres = await apiCalls.getGenres();       
      this.setState(genres);
    } catch (err) {
      console.error(err)
    }
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
      this.loadGenres();
      this.loadPopular();
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content
        genres={this.state.genres}
        popular={this.state.popular}
        />
        <Footer />
      </div>
    );

  }
 
}





export default App;
