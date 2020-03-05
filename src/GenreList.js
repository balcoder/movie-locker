import React, { Component } from 'react';
import './scss/GenreList.scss';


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

function GenreList({genres}) {     
    let links = genres.map(val => (
    <li key={val.id}>{val.name}</li>
    ))
    return (
      <div className="genre-list">
        <ul>{links}</ul>
      </div>
    );

}



export default GenreList;