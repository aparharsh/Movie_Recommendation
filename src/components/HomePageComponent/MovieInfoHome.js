import React from 'react';
import './MovieInfoHome.css'

const MovieInfoHome = (props) => {
    return(
        <div>
        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data.movieName} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data.rating} </div>                        
            </div>

            {/* <div className="MIHMovieType">
                <div className="MIHTypeHeading"><strong>GENRE</strong></div>
                <div className="MIHTypeBody">{props.data.genre} </div>        
            </div>

            <div className="MIHMovieType">
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBody">{props.data.rating} </div>                        
            </div>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>DIRECTOR</strong></div>
                <div className="MIHTypeBody">{props.data.director} </div>
            </div>
            <div className="MIHMovieType">
                <div className="MIHTypeHeading"><strong>RUNTIME</strong></div>
                <div className="MIHTypeBody">{props.data.runtime} </div>
            </div>            
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RELEASED ON</strong></div>
                <div className="MIHTypeBody">{props.data.releasedOn} </div>
            </div> */}
            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data.overview} okWhen Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world. </div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data.posterlink + ")"}}>

        </div>
        </div>
    );
}
export default MovieInfoHome;