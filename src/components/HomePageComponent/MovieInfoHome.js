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

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data.overview} okWhen Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world. </div>
            </div>
        </div>
        {/* <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data.posterlink + ")"}}>

        </div> */}
        </div>
    );
}
export default MovieInfoHome;