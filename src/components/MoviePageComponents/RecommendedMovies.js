import React, { Component } from 'react';
import './RecommendedMovies.css';
import FilterBar from './FilterBar';

const RecommendedMovies = (props) => {
    return(
        <div>
            <div>
                <div className="RMRecommendedMoviesBox">
                    <div className="RMheading">
                        Recommended Movies
                    </div>
                    <FilterBar/>
                    <div className="RMcontainer">
                        {/* <div className="RMmovieBox1"> */}
                            <div className="RMnameMovie">
                                <div className="RMposter" style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[0] + ")"}} >

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[0]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[1] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[1]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[2] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[2]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[3] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[3]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[3] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[3]} </strong>
                                </div>
                            </div>

                        {/* </div> */}
                    {/* </div>

                    <div className="RMcontainer"> */}
                        {/* <div className="RMmovieBox2"> */}
                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[4] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[4]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[5] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[5]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[6] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[6]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[7] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[7]} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" id="RMLast">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.recomendedMoviesLinks[0] + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.recommendedMovie[7]} </strong>
                                </div>
                            </div>



                        {/* </div> */}
                    </div>


                </div>
            </div>
            <div>
                
            </div>
        </div>

    );
}

export default RecommendedMovies;