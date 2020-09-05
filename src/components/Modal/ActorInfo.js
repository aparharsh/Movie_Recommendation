import React, { Component } from 'react';
import '../Modal/ActorInfo.css'

class ActorInfo extends Component {



  render() {
    console.log('ModalProps',this.props.data)
    return (



      <div >
       <div className="AIName">
         { this.props.data.name}
       </div>
       <div>
          
          <div className="AIAbout">
            <div className="AIAboutHead">
              About
            </div>
            <div className="AILeftBio">{ this.props.data.bio}</div>
            <div className="AILeftBorn">Born : { this.props.data.birthday} </div>
            <div className="AILeftRole"> Role In Movie : { this.props.data.job} </div>
            <div className="AILeftPopular">
              Popular Movies : 
              <span className="ModalKF" onClick={ (m) => {this.props.ThMod(this.props.data.known_for[0]);
              this.props.click();}}>   { this.props.data.known_for[0]} &nbsp; </span>
              <span className="ModalKF" onClick={ (m) => {this.props.ThMod(this.props.data.known_for[1]);
              this.props.click();}}> |&nbsp; { this.props.data.known_for[1]} &nbsp; </span>
              <span className="ModalKF" onClick={ (m) => {this.props.ThMod(this.props.data.known_for[2]);
              this.props.click();}}> |&nbsp; { this.props.data.known_for[2]} &nbsp; </span>
              <span className="ModalKF" onClick={ (m) => {this.props.ThMod(this.props.data.known_for[3]);
              this.props.click();}}> |&nbsp; { this.props.data.known_for[3]} &nbsp; </span>
            </div>
            {/* <div className="AIAboutP" style={{backgroundColor:'yellow',backgroundImage:"url(" + this.props.data.poster + ")"}}></div> */}
            {/* backgroundImage:"url(" + this.props.data.poster + ")" */}
          </div>
          <img src={this.props.data.poster} className="AIAboutP" />
       </div>
       <div>
           
           
       </div>
      </div> 



    );
  }
}

export default ActorInfo;
