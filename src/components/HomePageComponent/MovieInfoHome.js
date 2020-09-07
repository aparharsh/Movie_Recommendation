import React from 'react';
import './MovieInfoHome.css'
import Slider from 'infinite-react-carousel';

const settings =  {
    autoplay: true,
    centerMode: true,
    duration: 300,
    overScan: 1,
    slidesToShow: 1
};

const MovieInfoHome = (props) => {
    return(

        
        <div>
            <Slider {...settings}>
                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[7].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[7].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[7].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[7].poster_path + ")"}}>
        </div>

                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[1].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[1].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[1].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[1].poster_path + ")"}}>
        </div>
        
                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[2].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[2].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[2].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[2].poster_path + ")"}}>
        </div>

                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[3].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[3].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[3].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[3].poster_path + ")"}}>
        </div>
        
                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[4].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[4].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[4].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[4].poster_path + ")"}}>
        </div>

                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[5].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[5].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[5].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[5].poster_path + ")"}}>
        </div>
        
                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[6].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[6].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[6].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[6].poster_path + ")"}}>
        </div>

                </div>

                <div>

        <div className="MIHbox" >
            <h1 className="MIHMovieTitle">{props.data[0].title} </h1>
            <div className="MIHMovieType" style={{border:'none'}}>
                <div className="MIHTypeHeading"><strong>RATING</strong></div>
                <div className="MIHTypeBodyRating" >{props.data[0].rating} </div>                        
            </div>

            <div className="MIHMovieOverview">
                <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
                <div className="MIHTypeBodyOverview" >{props.data[0].overview}</div>
            </div>
        </div>
        <div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[0].poster_path + ")"}}>
        </div>
        
                </div>

            </Slider>
        </div>


    );
}
export default MovieInfoHome;

{/* <div>
<div className="MIHbox" >
    <h1 className="MIHMovieTitle">{props.data[0].title} </h1>
    <div className="MIHMovieType" style={{border:'none'}}>
        <div className="MIHTypeHeading"><strong>RATING</strong></div>
        <div className="MIHTypeBodyRating" >{props.data[0].rating} </div>                        
    </div>

    <div className="MIHMovieOverview">
        <div className="MIHTypeHeading"><strong>OVERVIEW</strong></div>
        <div className="MIHTypeBodyOverview" >{props.data[0].overview}</div>
    </div>
</div>
<div className="MIHPosterbox" style={{backgroundImage:"url(" + props.data[0].poster_path + ")"}}>

</div>
</div> */}