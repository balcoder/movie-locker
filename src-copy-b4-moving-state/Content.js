import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './scss/Content.scss';
import Home from './Home';
import GenreList from './GenreList';
import MovieGallery from './MovieGallery';
import Movie from './Movie';



function Content(props) {   
  
  return (
    <div className="content">   
      <GenreList
      genreIds={props.genreIds}
       />
      <Switch> 
      <Route exact path="/" render={({ match }) => (
            <Home {...match} {...props} />
          )}
        />            
        <Route path="/genre/:id" render={({ match }) => (
            <MovieGallery {...match} {...props} />
          )}
        />    
        <Route 
          path="/movie/:id"
          render={(routeProps) => (
            <Movie {...routeProps} props />
          )}
        />  
      </Switch>     
      </div>
  );
}



export default Content;