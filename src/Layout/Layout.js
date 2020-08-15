import React, { Component } from 'react';
import HomePage from './HomePage';
import Test from '../Layout/Testing/Test';
import MoviePageComponents from '../components/MoviePageComponents/MoviePageComponents';


class Layout extends Component{


    state = {
        searchtypeq:'',
        searchenterq:'',
        homeState:{
          title:'HomeTitle'
        },
        moviePage:{
          title:'Movie Recommendation System'
        }
    };


    onChangeHandler = (event) => {
         this.setState({
             searchtypeq: event.target.value  
         })
        // const title = event.target.value;
        // stateData.moviePage.title = event.target.value;
        console.log('search',this.state);

    }




    render() {
        return (
            

        // Page1

            <HomePage data={this.state} onSearch={this.onChangeHandler}/>

        // Page2

            
            // <MoviePageComponents data={this.state} onSearch={this.onChangeHandler} />
        
        // For Testing
            // <Test />  

        // The End :)

        );
      }
}
export default Layout;