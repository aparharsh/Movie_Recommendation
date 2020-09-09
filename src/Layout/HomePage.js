import React, { Component } from 'react';
import './HomePage.css';
import MovieState from '../States/MovieState';
import Topnav from '../components/MoviePageComponents/Topnav';
import BgParticle from '../components/MoviePageComponents/BgParticle';
import SearchBox from '../components/MoviePageComponents/SearchBox';
import MovieInfoHome from '../components/HomePageComponent/MovieInfoHome';
import CarouselEx from '../components/CarouselEx';





class HomePage extends Component{

  constructor(props){
    super(props);

    this.state={
      ...MovieState,
      carouselData:'null'
    }

}

// no need of fetching home page data

// componentDidMount(){
//   fetch('http://127.0.0.1:5000/home')
//      .then(response => response.json())
//      .then(data => this.setState({carouselData:data}));
// }





    render() {

      // console.log();
      console.log(MovieState);
      console.log(this.state.carouselData)

      // if ( this.state.carouselData !== 'null'){
      //   car=<CarouselEx data={MovieState}/> }
      // else{car=''}


          return (


          

          <div>
            <div>
              <Topnav data={this.props.data} />
              <div>
                <BgParticle/>
                
                <SearchBox data={this.props.data} ontype2={this.props.ontypeH} onEnter2={this.props.onEnter} />
                {/* <MovieInfoHome data={this.state} /> */}
                
              </div>
              <div style={{top:'200px', position:'absolute', width:'100%'}}>
                <MovieInfoHome data={MovieState} />
                
                <CarouselEx data={MovieState} ORecm={this.props.ORecm}/>
              </div>
            </div>
          </div>
     
    

        );
      }

}


export default HomePage;

