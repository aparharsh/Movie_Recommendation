import React, { Component } from 'react';
import './Carousel.css';
import Slider from 'infinite-react-carousel';
import { withRouter } from 'react-router-dom';

  


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
            <div style={{marginTop:'45px', paddingBottom:'15px',backgroundColor:'black'}} className="CDivMargin">
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
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[0].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[0].poster_path + ")"}} >
                        
                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[1].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[1].poster_path + ")"}}>

                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[2].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[2].poster_path + ")"}}>
                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[3].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[3].poster_path + ")"}}>
                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[4].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[4].poster_path + ")"}}>
                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[5].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[5].poster_path + ")"}}>
                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[6].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[6].poster_path + ")"}}>
                    </div>
                </div>

                <div>
                    <div className="NewC" onClick={()=> {
                        this.props.ORecm(this.props.data[7].title);
                        this.props.history.push('/movie');}}
                        style={{backgroundImage:"url(" + this.props.data[7].poster_path + ")"}}>
                    </div>
                </div> 

            </Slider>
        </div>
        );
    }
}
export default withRouter(CarouselEx);