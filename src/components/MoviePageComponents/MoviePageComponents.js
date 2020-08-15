import React, { Component } from 'react';
import MovieState from '../../States/MovieState';
import Topnav from './Topnav';
import MovieToShow from './MovieToShow';
import MovieCasts from './MovieCasts';
import UserReview from './UserReview';
import RecommendedMovies from './RecommendedMovies';



class MoviePageComponents extends Component{

     state = MovieState;

  

    render() {
        
        return (
                
            <div>
                <div >
                    <Topnav data={this.props.data}/>
                    <MovieToShow data={this.state} onSearch1={this.props.onSearch} />
                    <MovieCasts data={this.state}/>
                    <UserReview data={this.state}/>
                    <RecommendedMovies data={this.state}/>
                    
                </div>
           </div>

        );
      }

}


export default MoviePageComponents;