import React from 'react';
import './scss/Content.scss';
import GenreList from './GenreList';
import MovieGallery from './MovieGallery';

function Content(props) {  
  return (
    <div className="content">
      <GenreList
      genreIds={props.genreIds}
      onGenreClick={props.onGenreClick} />
      <MovieGallery popular={props.popular} />      
      </div>
  );
}



export default Content;