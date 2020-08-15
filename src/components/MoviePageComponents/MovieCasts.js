import React, { Component } from 'react';
import './MovieCasts.css';
const MovieCasts = (props) => {
    return(
        <div>
           <div className="MCblackBGCAast" >
               <div className="MCCasts"><strong>Top Casts</strong></div>
               <div>
                  <div >
                    <div className="MCrecDiv">
                      <img src="https://i.pravatar.cc/299" className="MCPP"/>
                      <div className="MCRealname">{props.data.castRealName[0]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[0]} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src="https://i.pravatar.cc/300" className="MCPP"/>
                      <div className="MCRealname">{props.data.castRealName[1]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[1]} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src="https://i.pravatar.cc/301" className="MCPP"/>
                      <div className="MCRealname">{props.data.castRealName[2]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[2]} </div>
                    </div>

                    <div className="MCrecDiv">
                    <img src="https://i.pravatar.cc/302" className="MCPP"/>
                    <div className="MCRealname">{props.data.castRealName[3]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[3]} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src="https://i.pravatar.cc/303" className="MCPP"/>
                      <div className="MCRealname">{props.data.castRealName[4]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[4]} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src="https://i.pravatar.cc/304" className="MCPP"/>
                      <div className="MCRealname">{props.data.castRealName[5]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[5]} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src="https://i.pravatar.cc/290" className="MCPP"/>
                      <div className="MCRealname">{props.data.castRealName[6]} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.castCharacterName[6]} </div>
                    </div>
                   </div>                
               </div>
           </div>
           
        </div>
    );
}
export default MovieCasts;