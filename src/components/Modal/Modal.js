import React, { Component } from 'react';
import '../../components/Modal/Modal.css';
import ActorInfo from './ActorInfo';
import Backdrop from './Backdrop';


class Modal extends Component {



  render() {
    // console.log('ModalProps',this.props.data.ModalProps)

    return (

      <div>
        <Backdrop showB={this.props.data.Modalstate} clicked={this.props.hideM}/>
        <div className="Modal">
          <ActorInfo data={this.props.data.ModalProps} ThMod={this.props.TMod}/>
        </div> 
      </div>


    );
  }
}

export default Modal;
