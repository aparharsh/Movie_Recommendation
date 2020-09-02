import React from 'react';
import './MovieCasts.css';
const MovieCasts = (props) => {
  // console.log('MCProps',props.data.data.moviePage.cast[0].poster)
    return(
        <div>
           <div className="MCblackBGCAast" >
               <div className="MCCasts"><strong>Top Casts</strong></div>
               <div>
                  <div >
                    <div className="MCrecDiv">
                      <img src={props.data.data.moviePage.cast[0].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[0])}/>
                      {/* src="https://i.pravatar.cc/299" */}
                      <div className="MCRealname">{props.data.data.moviePage.cast[0].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[0].job} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src={props.data.data.moviePage.cast[1].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[1])}/>
                      <div className="MCRealname">{props.data.data.moviePage.cast[1].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[1].job} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src={props.data.data.moviePage.cast[2].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[2])}/>
                      <div className="MCRealname">{props.data.data.moviePage.cast[2].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[2].job} </div>
                    </div>

                    <div className="MCrecDiv">
                    <img src={props.data.data.moviePage.cast[3].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[3])}/>
                    <div className="MCRealname">{props.data.data.moviePage.cast[3].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[3].job} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src={props.data.data.moviePage.cast[4].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[4])}/>
                      <div className="MCRealname">{props.data.data.moviePage.cast[4].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[4].job} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src={props.data.data.moviePage.cast[5].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[5])}/>
                      <div className="MCRealname">{props.data.data.moviePage.cast[5].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[5].job} </div>
                    </div>

                    <div className="MCrecDiv">
                      <img src={props.data.data.moviePage.cast[6].poster} alt="alt" className="MCPP" onClick={(m) => props.clicked(props.data.data.moviePage.cast[6])}/>
                      <div className="MCRealname">{props.data.data.moviePage.cast[6].name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{props.data.data.moviePage.cast[6].job} </div>
                    </div>
                   </div>                
               </div>
           </div>
           
        </div>
    );
}
export default MovieCasts;