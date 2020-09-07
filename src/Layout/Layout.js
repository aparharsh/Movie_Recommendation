import React, { Component } from 'react';
import HomePage from './HomePage';
import Test from '../Layout/Testing/Test';
import MoviePageComponents from '../components/MoviePageComponents/MoviePageComponents';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Layout extends Component{


    state = {
        searchtypeq:'',
        searchenterq:'',
        homeState:{
          title:'HomeTitle'
        },
        moviePage:''
    };

    componentDidMount(){
      sessionStorage.moviePage=''
      // console.log('setP')
    }

    chng = (e) =>{
      this.setState({moviePage:e})
      console.log('done1')
    }

    onChangeHandler = (event) => {
        console.log('onType');
         this.setState({
             searchtypeq: event
        })
    }
    recClickHandler = (m) => {
      console.log('Recom',this.state.searchtypeq);
      this.setState({
        searchtypeq: m ,
        moviePage:''
      }, ()=>this.onSearchHandler());
      

    }
    modClickHandler = (m) => {
      console.log('ModalCliick',m);
      this.setState({
        searchtypeq: m ,
        moviePage:''
      }, ()=>this.onSearchHandler());

    }
    onSearchHandler = ( ) => {
      this.setState({
        moviePage:''
      });
        // this.setState({moviePage:'Chnaged state of movie page'})
        fetch('http://127.0.0.1:5000/recom',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({title:this.state.searchtypeq})
        }).then(response => response.json())
        .then(d => this.setState({moviePage:d}) )
        

        console.log('1',this.state.searchtypeq )
        // fetch('http://127.0.0.1:5000/recom',{
        //     method:'POST',
        //     headers:{'Content-type':'application/json'},
        //     body:JSON.stringify({title:'Avatar'})
        // }).then(response => response.json())
        // .then(d => this.setState({moviePage:d}))
        // .then(d => console.log('fetched',d))
    }




    render() {
        
      // console.log('searchtypeq',this.state.searchtypeq);
        console.log('stateafterFetch',this.state.moviePage);
        console.log('searchTypeEq', this.state.searchtypeq)
        return (

          <Router>

          {/* Page1 & 2 */}

        
          <Route exact path="/" render={ () => <HomePage data={this.state} ontypeH={this.onChangeHandler} onEnter={this.onSearchHandler} ORecm={this.recClickHandler}/>  } />
          <Route exact path="/movie" render={ () => <MoviePageComponents data={this.state} chng={this.chng} filT={this.state.searchtypeq} OMod={this.modClickHandler} ORecm={this.recClickHandler} ontypeM={this.onChangeHandler} onEnter={this.onSearchHandler} /> } />
         
          {/* <MoviePageComponents data={this.state} onSearch={this.onChangeHandler} /> */}
        
          {/* <Test />   */}

        </Router>

        );
      }
}
export default Layout;