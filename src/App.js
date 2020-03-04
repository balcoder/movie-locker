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
      genres: []
    };
    
  }

  async loadGenres() {
    try {
      let genres = await apiCalls.getGenres();
      debugger   
      this.setState(genres);
    } catch (err) {
      console.error(err)
    }
  }

  

    componentDidMount() {
      this.loadGenres();
      // let genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`;
      
      // fetch(genresUrl)
      // .then(res =>{
      //   if(!res.ok) {
      //     throw new Error('Network reaponse was not ok');
      //   }
      //   return res.json();
      // })
      // .then(res => { 
      //   console.log(res.genres);      
      //   this.setState({genres: res.genres});
      // })
      // .catch((error) => {
      //   console.error('There was problem with your fetch operation: ', error);
      // });
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content genres={this.state.genres} />
        <Footer />
      </div>
    );

  }
 
}





export default App;
