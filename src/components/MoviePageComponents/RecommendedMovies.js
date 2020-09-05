import React, { Component } from 'react';
import './RecommendedMovies.css';
import FilterBar from './FilterBar';

class RecommendedMovies extends Component{
    // console.log('RMProps',props.filter)

    constructor(props){
        super(props);
        this.state={
            filMov : ''
        }
    }

    componentDidMount(){
        this.setState({filMov:this.props.data.data.moviePage.recom_mov})
    }

    filSet = (me) => {
        console.log(me)
        this.setState({filMov : me.fil_mov})
    }

    render(){
        let p;
        if(this.state.filMov!=''){
            p = ( this.state.filMov.map((s, idx)=>{
                return(
                    <div className="RMnameMovie" key={idx} onClick={(m) => this.props.TRecm(s.title)}>
                        <div className="RMposter" style={{backgroundImage:"url(" + s.poster_path + ")"}} >

                        </div>
                        <div className="RMName">
                            <strong>{s.title} </strong>
                        </div>
                    </div>
                )
            })
            )
        }
        else{p='Loading....'}

    return(
        <div>
            <div>
                <div className="RMRecommendedMoviesBox">
                    <div className="RMheading">
                        Recommended Movies
                    </div>
                    <FilterBar data={this.props.data} filT={this.props.filT} fdata={this.props.filter} fSet={this.filSet} changeC={this.props.click1}/>

                    <div className="RMcontainer">
                            
                            {p}

                    </div>


                </div>
            </div>
            <div>
                
            </div>
        </div>

    );
    }
}

export default RecommendedMovies;