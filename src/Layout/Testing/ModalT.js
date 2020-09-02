import React, { Component } from 'react';
import '../Testing/ModalT.css';
import Backdrop from '../../components/Modal/Backdrop';


class ModalT extends Component {



  render() {
    return (


      <div>
      <Backdrop showB={this.props.data.Modalstate} clicked={this.props.hideM}/>
      <div className="ModalT">
          
        <div >
          <div className="AIName">
              Actor Name
          </div>
          <div>
              <div className="AIAboutHead">
                About
              </div>
              <div>
                <div className="AIAbout">Abouthfjggjhghdgsfw54yghrjholkhkmbvcw34tyuikjhgfdszxcvbnkjuhygfdwer4t5yuiokjnhbvcxcvbnmkjhgfderui</div>
                <div className="AIAbout">pic</div>

              </div>
          </div>
          <div>
              <div className="AIFamousMovie">Famous For : MovieName </div>
              <div >
                  Best Movies
                  <div>Movie1</div>
                  <div>Movie1</div>
                  <div>Movie1</div>
                  <div>Movie1</div>
                  
              </div>
          </div>
        </div> 
      </div> 
      </div>


    );
  }
}

export default ModalT;
