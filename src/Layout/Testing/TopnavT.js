import React, { Component } from 'react';
import '../Testing/TopnavT.css';
import logo from '../../../src/logo.svg';

class TopnavT extends Component {



  render() {
    return (



     <div className="main-nav" style={{position:'fixed',display:'flex',backgroundColor:'',transition:'0.4s',width:'100%',padding:'2px'}} >
        <div className="divTT" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} width='40' height='40' alt='logo' />
            <div>Mahee</div>
        </div >
        <div className="divTT" style={{display:'flex',marginLeft:'auto', marginRight:'15px', alignItems:'center'}}>
            home
        </div>
        <div className="divTT" style={{display:'flex', marginRight:'15px', alignItems:'center'}}>
            About
        </div>
        <div className="divTT" style={{display:'flex', marginRight:'15px', alignItems:'center'}}>
            blogs
        </div>
        <div className="divTT" style={{display:'flex', marginRight:'15px', alignItems:'center'}}>
            contact us
        </div>
        <div className="divTT" style={{display:'flex', marginRight:'10px', alignItems:'center'}}>
            contribute
        </div>

     </div>


    );
  }
}

export default TopnavT;
