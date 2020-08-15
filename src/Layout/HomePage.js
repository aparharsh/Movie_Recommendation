import React, { Component } from 'react';
import './HomePage.css';
import SearchBar from '../components/SearchBar';
import HomeMovieInfo from '../components/HomeMovieInfo';
import CarouselEx from '../components/CarouselEx';
import MovieState from '../States/MovieState';
import Topnav from '../components/MoviePageComponents/Topnav';
import BgParticle from '../components/MoviePageComponents/BgParticle';
import SearchBox from '../components/MoviePageComponents/SearchBox';
import MovieToShow from '../components/MoviePageComponents/MovieToShow';
import MovieInfoShow from '../components/MoviePageComponents/MovieInfoShow';
import MovieInfoHome from '../components/HomePageComponent/MovieInfoHome';





class HomePage extends Component{

  constructor(props){
    super(props);

    this.state={
      ...MovieState,
      carouselData:''
    }

}

componentDidMount(){
  fetch('http://127.0.0.1:5000/home')
     .then(response => response.json())
     .then(data => this.setState({carouselData:data}));
}





    render() {

   

      // console.log();
      console.log('this.state',this.state);

        return (


          

          <div>
            <div>
              <Topnav data={this.props.data} />
              <div>
                <BgParticle/>
                <SearchBox onSearch2={this.props.onSearch} />
                <MovieInfoHome data={this.state} />
              </div>
              <div >
                <CarouselEx data={this.state}/>
              </div>
            </div>
          </div>
     
    

        );
      }

}


export default HomePage;



      
  // state = {
  //   movies: [
  //     {
  //       name1: 'iron man',
  //       link: "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg"
  //     },
  //     {
  //       name1: 'thor',
  //       link: "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg"
  //     }
  //   ]
  // };

  // changeColor = () => {
  //   let nbg = {...this.state};
  //   nbg.bg="url(" + this.state.bglink + ")";
  //   this.setState({...nbg});
  //   console.log(this.state);
  // }
  
// state={
//   bg:"url(" + '' + ")",
//   bglink:"https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg"
// }
// var clr = "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg";
// var clr1 = "https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg";

     // Movie Recommending System
            
          // <div>
          //   <div className="Body" >
          //   <Topnav data={this.state}/>
          //     <nav className="Nav"><h3 className="Text">{this.state.movies[1].name1} </h3></nav>
          //     <div className='BackGImg'>
          //       <div>
          //         <SearchBar className="test"/>
          //         <HomeMovieInfo/>
          //         <div>
          //           <CarouselEx/>
          //         </div>
          //       </div>
          //     </div>
          //       <div className="test" style={{backgroundImage: this.state.bg}} onClick={this.changeColor}>kfgjdsj</div>
          //     </div>    
          // </div>