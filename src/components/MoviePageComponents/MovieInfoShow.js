import React from 'react';
import './MovieInfoShow.css'

const MovieInfoShow = (props) => {
    return(
        <div>
        <div className="MISbox" >
            <h1 className="MISMovieTitle">{props.data.movieName} </h1>

            <div className="MISMovieType">
                <div className="MISTypeHeading"><strong>GENRE</strong></div>
                <div className="MISTypeBody">{props.data.genre} </div>        
            </div>

            <div className="MISMovieType">
                <div className="MISTypeHeading"><strong>RATING</strong></div>
                <div className="MISTypeBody">{props.data.rating} </div>                        
            </div>
            <div className="MISMovieType" style={{border:'none'}}>
                <div className="MISTypeHeading"><strong>DIRECTOR</strong></div>
                <div className="MISTypeBody">{props.data.director} </div>
            </div>
            <div className="MISMovieType">
                <div className="MISTypeHeading"><strong>RUNTIME</strong></div>
                <div className="MISTypeBody">{props.data.runtime} </div>
            </div>
            <div className="MISMovieType" style={{border:'none'}}>
                <div className="MISTypeHeading"><strong>RELEASED ON</strong></div>
                <div className="MISTypeBody">{props.data.releasedOn} </div>
            </div>
            <div className="MISMovieOverview">
                <div className="MISTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MISTypeBody">{props.data.overview} okWhen Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world. </div>
            </div>
        </div>
        <div className="MISPosterbox" style={{backgroundImage:"url(" + props.data.posterlink + ")"}}>

        </div>
        </div>
    );
}
export default MovieInfoShow;