import React from 'react';
import './Topnav.css';

const Topnav = (props) => {
    return(
        <div >
            <div>
                <nav className="Topnav"><h3 className="TopnavText">{props.data.moviePage.title} </h3></nav>
            </div>
        </div>
    );
}
export default Topnav;