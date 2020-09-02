import React from 'react';
import './MovieInfoShow.css'

const MovieInfoShow = (props) => {
    // console.log('MISProps',props.data.data.moviePage)
    return(
        <div>
        <div className="MISbox" >
            <h1 className="MISMovieTitle">{props.data.data.moviePage.title} </h1>

            <div className="MISMovieType">
                <div className="MISTypeHeading"><strong>GENRE</strong></div>
                <div className="MISTypeBody">{props.data.data.moviePage.genres[0]} </div>        
            </div>

            <div className="MISMovieType">
                <div className="MISTypeHeading"><strong>RATING</strong></div>
                <div className="MISTypeBody">{props.data.data.moviePage.rating} </div>                        
            </div>
            <div className="MISMovieType" style={{border:'none'}}>
                <div className="MISTypeHeading"><strong>DIRECTOR</strong></div>
                <div className="MISTypeBody">{props.data.data.moviePage.cast[0].name} </div>
            </div>
            <div className="MISMovieType">
                <div className="MISTypeHeading"><strong>RUNTIME</strong></div>
                <div className="MISTypeBody">{props.data.data.moviePage.runtime} </div>
            </div>
            <div className="MISMovieType" style={{border:'none'}}>
                <div className="MISTypeHeading"><strong>RELEASED ON</strong></div>
                <div className="MISTypeBody">{props.data.data.moviePage.release_date} </div>
            </div>
            <div className="MISMovieOverview">
                <div className="MISTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MISTypeBody">{props.data.data.moviePage.overview} </div>
            </div>
        </div>
        <div className="MISPosterbox" style={{backgroundImage:"url(" + props.data.data.moviePage.poster_path + ")"}}>
        {/* props.data.posterlink */}
        </div>
        </div>
    );
}
export default MovieInfoShow;