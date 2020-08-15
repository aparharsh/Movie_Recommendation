import React, { Component } from 'react';
// import axios from './AxiosBaseUrl';
import '../Testing/TestForFetch.css';
import MovieState from '../../States/MovieState';
import Slider from 'infinite-react-carousel';

const settings =  {
    autoplay: false,
    centerMode: true,
    duration: 300,
    overScan: 1,
    slidesToShow: 4
};



class TestForFetch extends Component{

    constructor(props){
        super(props);

        this.state={
            ...MovieState,
            dat:'',
           name: 'saurabh',
           enNo: '0373',
           branch: 'me',
           arr: ['1', 'two', '3']
        }

    }

    componentWillMount(){
        fetch('http://127.0.0.1:5000/home')
           .then(response => response.json())
           .then(data => this.setState({dat:data}));
    }

   

    render() {

        var tifs =this.state.dat;	

        // var tifOptions = Object.keys(tifs).map(function(key) {
            
        //     return <div key={key} className="TFFbox" style={{backgroundImage:"url(" + tifs[key] + ")"}}></div>
        //     });

           console.log('tifs1',tifs);
     //  console.log(tifs);
        return (
            <div className="CDivMargin">
            <Slider {...settings}>

                


                <div>
                    <div className="TNewC" style={{backgroundImage:"url(" + this.state.suggestedMoviesLinks[0] + ")"}} >
                        <div className="TCMoiveNameInDiv">
                            {this.state.suggestedMoviesNames[0]}
                            <div className="TCHr"></div>
                            Imdb: {this.state.suggestedMoviesImdb[0]}
                        </div>
                        
                    </div>
                </div>

                <div>
                    <div className="TNewC" style={{backgroundImage:"url(" + this.state.suggestedMoviesLinks[1] + ")"}}>
                        <div className="TCMoiveNameInDiv">
                            {this.state.suggestedMoviesNames[1]}
                            <div className="TCHr"></div>
                            Imdb: {this.state.suggestedMoviesImdb[2]}
                        </div>  

                    </div>
                </div>

                <div>
                    {
                        Object.keys(tifs).map(function(key) {
                            console.log('jhfdk',tifs[key])
                        return (
                            <div key={key} className="TNewC" style={{backgroundImage:"url(" +  tifs[key] + ")"}}>
                                <div className="TCMoiveNameInDiv">
                                    jdh
                                    {/* {this.state.suggestedMoviesNames[1]} */}
                                    <div className="TCHr"></div>
                                    dhhd
                                    {/* Imdb: {this.state.suggestedMoviesImdb[2]} */}
                                </div>  
                            </div>
                        );
                        })
                    }

                    
                </div>

           
      

            </Slider>
        </div>
        );
      }
}
export default TestForFetch;