import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './scss/GenreList.scss';

const BASEURL = "";
// class GenreList extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     //let links = this.props.genres.map(val => val.name)
//     return (
//       <div className="genre-list">
//         GenreList
//       </div>
//     );
//   }
// }

function GenreList({genreIds, onGenreClick}) {       
    let links = genreIds.map(val => (
    <li
     key={val.id}
     data-id={val.id}
     >
    <Link 
    to={`/${val.name.toLowerCase()}`}
    className="genre-link"
    onClick={onGenreClick}
    data-genre-id={val.id}>
    {val.name}
    </Link> 
    </li>
    ))
    return (
      <div className="genre-list">
        <ul>{links}</ul>
      </div>
    );

}



export default GenreList;