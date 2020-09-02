import React, { Component } from 'react';
import './MultiSDropDown.css';
import FilterBar from '../../components/MoviePageComponents/FilterBar';



class MultiSDropDownT extends Component{


    state={
        Language:true,
        Popularity:false,
        Director:false,
        Genre:false,
        Actor:false
    }
    

  checkC = (e) => {
    console.log('CheckCEvent',e.target.value)
    this.setState({
      [e.target.value]:e.target.checked
    })
    

    // if(this.state.l){
    //   this.setState({l:false});
    // }else{
    //   this.setState({l:true});
    // }
  }

    render() {
      console.log('CurrState',this.state)
        
        return (
                
            <div >
               <FilterBar data={this.state} changeC={this.checkC}/>
            </div>

        );
      }

}


export default MultiSDropDownT;