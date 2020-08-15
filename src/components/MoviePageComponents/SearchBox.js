import React from 'react';
import './SearchBox.css'

const SearchBox = (props) => {
    
    return(
        <div className="SearchBox">
            <label htmlFor="search"></label>

            <input className="Round" type="text" placeholder="search" onChange={props.onSearch2} /> 

            <button className="SearchButton" type="submit">
                <span className="SearchIcon">
                    <i className="fa fa-search"></i>
                </span>
            </button>
        </div>
    );
}
export default SearchBox;