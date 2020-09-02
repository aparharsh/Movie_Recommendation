import React, { Component } from 'react';
import './Carousel.css';
import Slider from 'infinite-react-carousel';
// import MovieState from '../States/MovieState';

  


const settings =  {
    autoplay: true,
    centerMode: true,
    duration: 300,
    overScan: 1,
    slidesToShow: 4
};


class CarouselEx extends Component {

 


    
    render(){
        

        return(
            <div style={{marginTop:'15px', paddingBottom:'15px'}} className="CDivMargin">
            <Slider {...settings}>

                
                {/* {Object.entries(this.props.data).forEach( (k,v) => {
                    <div>
                    <div className="NewC" style={{backgroundImage:"url(" + {v} + ")"}} >
                    <div className="CMoiveNameInDiv">
                        {k}
                    </div>
                    </div>
                    </div>
                })
            }                    */}

                {/* <div>
                    <div className="NewC" style={{backgroundImage:"url(" + this.props.data.suggestedMoviesLinks[1] + ")"}}>
                        <div className="CMoiveNameInDiv">
                            {this.props.data.suggestedMoviesNames[1]}
                            <div className="CHr"></div>
                            Imdb: {this.props.data.suggestedMoviesImdb[2]}
                        </div>  

                    </div>
                </div> */}
                
                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[0] + ")"}} >
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[0]}
                        </div> */}
                        
                    </div>
                </div>

                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[1] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[1]}
                        </div>   */}

                    </div>
                </div>

                <div>
                    <div className="NewC"  style={{backgroundImage:"url(" + Object.values(this.props.data)[2] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[2]}
                        </div>     */}
                    </div>
                </div>

                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[3] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[3]}
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[4] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[4]}
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[5] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[5]}
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[6] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[6]}
                        </div> */}
                    </div>
                </div>

                <div>
                    <div className="NewC" style={{backgroundImage:"url(" + Object.values(this.props.data)[7] + ")"}}>
                        {/* <div className="CMoiveNameInDiv">
                            {Object.keys(this.props.data)[7]}
                        </div>  */}
                    </div>
                </div> 

            </Slider>
        </div>
        );
    }
}
export default CarouselEx;