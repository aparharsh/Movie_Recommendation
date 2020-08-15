import React, { Component } from 'react';
import TestForFetch from './TestForFetch';
import AnimatingBg from './AnimatingBg';
import MultiSDropDownT from './MultiSDropDown';

class Test extends Component{

    constructor(props){
        super(props);


    }


    render() {
        return (
            <div style={{backgroundColor:"white"}}>
               <TestForFetch/>
               {/* <AnimatingBg/> */}
               {/* <MultiSDropDownT/> */}
            </div>
        );
      }
}
export default Test;