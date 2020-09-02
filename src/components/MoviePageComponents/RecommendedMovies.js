import React from 'react';
import './RecommendedMovies.css';
import FilterBar from './FilterBar';

const RecommendedMovies = (props) => {
    // console.log('RMProps',props.filter)

    return(
        <div>
            <div>
                <div className="RMRecommendedMoviesBox">
                    <div className="RMheading">
                        Recommended Movies
                    </div>
                    <FilterBar data={props.data} fdata={props.filter} changeC={props.click1}/>
                    <div className="RMcontainer">
                        {/* <div className="RMmovieBox1"> */}
                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[0].title)}>
                                <div className="RMposter" style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[0].poster_path + ")"}} >
                                {/* props.data.recomendedMoviesLinks[0] */}
                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[0].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[1].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[1].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[1].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[2].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[2].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[2].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[3].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[3].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[3].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[4].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[4].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[4].title} </strong>
                                </div>
                            </div>

                        {/* </div> */}
                    {/* </div>

                    <div className="RMcontainer"> */}
                        {/* <div className="RMmovieBox2"> */}
                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[5].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[5].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[5].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[6].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[6].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[6].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[7].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[7].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[7].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[8].title)}>
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[8].poster_path + ")"}}>

                                </div>
                                <div className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[8].title} </strong>
                                </div>
                            </div>

                            <div className="RMnameMovie" onClick={(m) => props.TRecm(props.data.data.moviePage.recom_mov[9].title)} id="RMLast">
                                <div className="RMposter"  style={{backgroundImage:"url(" + props.data.data.moviePage.recom_mov[9].poster_path + ")"}}>

                                </div>
                                <span className="RMName">
                                    <strong>{props.data.data.moviePage.recom_mov[9].title} </strong>
                                </span>
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