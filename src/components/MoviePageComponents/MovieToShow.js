import React, { Component } from 'react';
import './MovieToShow.css';
import BgParticle from './BgParticle';
import SearchBox from './SearchBox';
import MovieInfoShow from './MovieInfoShow';


class MovieToShow extends Component{



    render() {
      //  console.log(this.props.data);
        return (

            <div>
                <div className="BAContainer">
                    <div className="BAbox">
                        <BgParticle/>
                    </div>

                    <SearchBox data={this.props.data} ontype2={this.props.ontype1} onEnter2={this.props.onEnter1} />
                    <MovieInfoShow data={this.props.data} />
                    {/* <div className="BAFixSearchBox">
                        
                    </div> */}
                    
                </div>
           </div>

        );
      }

}


export default MovieToShow;