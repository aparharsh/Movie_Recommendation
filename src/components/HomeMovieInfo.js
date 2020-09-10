import React from 'react';
import './HomeMovieInfo.css';

const HomeMovieInfo = () => {
    return(
        <div className="back">
            <h2><strong>Iron Man</strong></h2>
                <div className="textMovie">
                    <h4>IMDB : 7.9</h4>
                    <p>When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.</p>
                    <button className="TrailerBtn"><i className='fa fa-play-circle fa-2x'></i> <span className="spantxt"> Watch Trailer</span></button>
                    <button className="TrailerBtnMore"><span className="spantxt"> More Info</span></button>
                </div>
        </div>
    );
}
export default HomeMovieInfo;