import React, { Component } from 'react';
import './Carousel.css';
import Slider from 'infinite-react-carousel';
import MovieState from '../States/MovieState';

  


const settings =  {
    autoplay: true,
    centerMode: true,
    duration: 300,
    overScan: 1,
    slidesToShow: 4
};


class CarouselEx extends Component {

    constructor(props){
        super(props);

        
    // var tifs =this.props.data.carouselData;	

    // var tifOptions = Object.keys(tifs).map(function(key) {
    //     return <div key={key} className="TFFbox" style={{backgroundImage:"url(" + tifs[key] + ")"}}></div>
    // });

    // console.log('tifs',tifs);
       
    }


    
    render(){
        

        return(
            <div className="CDivMargin">
                <Slider {...settings}>

                    


                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[0] + ")"}} >
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[0]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[0]}
                            </div>
                            
                        </div>
                    </div>

                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[1] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[1]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[2]}
                            </div>  

                        </div>
                    </div>

                    <div>
                        <div className="NewC"  style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[2] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[3]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[3]}
                            </div>    
                        </div>
                    </div>

                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[3] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[4]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[1]}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[4] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[5]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[4]}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[5] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[6]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[5]}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[6] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[2]}
                                <div className="CHr"></div>
                                Imdb2: {this.props.data.suggestedMoviesImdb[6]}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[7] + ")"}}>
                            <div className="CMoiveNameInDiv">
                                {this.props.data.suggestedMoviesNames[7]}
                                <div className="CHr"></div>
                                Imdb: {this.props.data.suggestedMoviesImdb[7]}
                            </div> 
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}
export default CarouselEx;