import React from 'react';
import './scss/Header.scss';
import searchIcon from './magnifying-glass.svg'


function Header() {
  return (
    <div className="header">
      <form className="search">
        <input
         type="text"
         className="search__input"
         placeholder="Search..."/>
        <button 
         type="submit"
         className="search__button"
         >
         <img src={searchIcon} className="search__icon"/>
         {/* <svg className="search__icon">
            <use href="magnifying-glass"></use>
         </svg> */}
         </button>
      </form>
    </div>
  );
}

export default Header;