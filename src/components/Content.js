import React from 'react';
import './scss/Content.scss';
import Home from './Home';
import Movie from './Movie';
import GenreList from './GenreList';
import MovieGallery from './MovieGallery';
import { Switch, Route } from 'react-router-dom';

function Content(props) {   
  
  return (
    <div className="content">   
      <GenreList
      genreIds={props.genreIds}
      onGenreClick={props.onGenreClick} />
      <Switch>
        <Route path="/" exact render={(routeProps) => (
            <Home {...routeProps} {...props} />
          )}
        />
         
        <Route path="/genre/:id" render={({ match }) => (
            <MovieGallery {...match} {...props} />
          )}
        />    
        <Route 
          path="/movie/:id"
          render={(routeProps) => (
            <Movie {...routeProps} {...props} />
          )}
        />  
      </Switch>
             
      
      
      {/* <MovieGallery popular={props.popular} />       */}
      </div>
  );
}

const TestParams = ({ match }) => (
  <div>
    {match.params.id}
  </div>
)



export default Content;