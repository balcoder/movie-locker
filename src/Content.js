import React from 'react';
import './scss/Content.scss';
import GenreList from './GenreList';
import MovieGallery from './MovieGallery';

function Content(props) {
  console.log("Content" ,props.genres.genres);
  return (
    <div className="content">
      <GenreList  genres={props.genres}/>
      <MovieGallery />      
      </div>
  );
}



export default Content;