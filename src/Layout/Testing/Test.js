import React, { Component } from 'react';
// import TestForFetch from './TestForFetch';
import AnimatingBg from './AnimatingBg';
import MultiSDropDownT from './MultiSDropDown';
import ModalT from './ModalT';
import TopnavT from './TopnavT';
import Backdrop from '../../components/Modal/Backdrop';

class Test extends Component{

    state={
        Modalstate:false
    }

    showM = (ch) =>{
        this.setState({Modalstate:true});
        console.log('event',ch);
    }
    hide = () =>{
         this.setState({Modalstate:false});
        console.log('hide');
    }

    render() {

        return (
            <div style={{backgroundColor:"white"}}>
                
               {/* <TestForFetch/> */}
               {/* {this.state.Modalstate ? <ModalT data={this.state} hideM={this.hide}/> : null} */}
               {/* <ModalT/> */}
               <AnimatingBg/>
               {/* <MultiSDropDownT/> */}
               {/* <TopnavT/> */}
               {/* <br/><br/><br/><br/><br/>
               <div onClick={(clicked) => this.showM('click me')} value="click me">click Me</div>
               <div onClick={(clicked) => this.showM('or me')}>or me</div>
                */}
            </div>
        );
      }
}
export default Test;