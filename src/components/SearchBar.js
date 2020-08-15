import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className="SearchBar">
            <label htmlFor="search"></label>
            <input className="Round" type="text" placeholder="search"/> 
            <button className="SearchButton" type="submit"><span className="SearchIcon"><i className="fa fa-search"></i></span></button>
        </div>
    );
}
export default SearchBar;