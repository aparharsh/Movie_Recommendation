import React, { Component } from 'react';
import MovieState from '../../States/MovieState';
import Topnav from './Topnav';
import MovieToShow from './MovieToShow';
import MovieCasts from './MovieCasts';
import UserReview from './UserReview';
import RecommendedMovies from './RecommendedMovies';
import Modal from '../Modal/Modal';
import Loader from '../UI/Loader';

import {withRouter} from 'react-router-dom';



class MoviePageComponents extends Component{

    state = {
        ...MovieState,
        Modalstate:false,
        ModalProps:null,
        Language:false,
        Popularity:false,
        Director:false,
        Genre:false,
        Actor:false
    };

    componentDidMount(){
        console.log('mount')
        if( sessionStorage.moviePage !== ''){
          if(this.props.data.moviePage === ''){
            console.log('ssTitle', sessionStorage.moviePage)
            fetch('http://0.0.0.0:80/recom',{
              method:'POST',
              headers:{'Content-type':'application/json'},
              body:JSON.stringify({title : sessionStorage.moviePage})
          }).then(response => response.json())
          .then(d => this.props.chng(d) )
            // console.log('done')
          }
        }
      }
      
    ModalShowHandler = (m) => {
        this.setState({Modalstate:true});
        this.setState({ModalProps:m});
        console.log('ModalProps');
    }
    hide = () =>{
        this.setState({Modalstate:false});
       console.log('hide');
    }

    checkC = (e) => {
        console.log('CheckCEvent',e.target.value)
        this.setState({
          [e.target.value]:e.target.checked
        })
    }
        
    
    

    render() {

        let p;
        // console.log('moviepage Props Shown',this.props.data.moviePage);
        // console.log('moviepage State Shown',this.state);
        // <div style={{backgroundColor:'yellow'}}>hi</div>

        if(this.props.data.moviePage === ''){
                p = <Loader/>
        }
        else if(typeof this.props.data.moviePage == 'string'){
            alert(this.props.data.moviePage);
            this.props.history.push('/');
        }
        else{
            sessionStorage.moviePage=this.props.data.moviePage.title
            p = <div >
                    {this.state.Modalstate ? <Modal data={this.state} TMod={this.props.OMod} hideM={this.hide}/> : null}
                    <Topnav data={this.props}/>
                    <MovieToShow data={this.props} ontype1={this.props.ontypeM} onEnter1={this.props.onEnter} />
                    <MovieCasts data={this.props} clicked={this.ModalShowHandler} />
                    <UserReview data={this.props}/>
                    <RecommendedMovies data={this.props} filT={this.props.filT} TRecm={this.props.ORecm} filter={this.state} click1={this.checkC}/>       
                </div>
        }
        
        return (
                
            <div>
                {/* <div >
                    <Modal/>
                    <Topnav data={this.props}/>
                    <MovieToShow data={this.props} ontype1={this.props.ontypeM} onEnter1={this.props.onEnter} />
                    <MovieCasts data={this.state}/>
                    <UserReview data={this.state}/>
                    <RecommendedMovies data={this.state}/>
                    
                   
                    
                </div> */}
                {p}
           </div>

        );
      }

}


export default withRouter(MoviePageComponents);