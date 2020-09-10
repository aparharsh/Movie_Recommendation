import React from 'react';
import './MovieCasts.css';
const MovieCasts = (props) => {
  // console.log('MCProps',props.data.data.moviePage.cast[0].poster)

const p = props.data.data.moviePage.cast.map((s)=>{
  return(
    <div className="MCrecDiv">
      <img src={s.poster} alt={s.name} className="MCPP" onClick={(m) => props.clicked(s)}/>
      <div className="MCRealname">{s.name} </div><div className="MCcharactername">Character</div><div className="MCcharactername">{s.job} </div>
    </div>
  )
})
    return(
        <div>
           <div className="MCblackBGCAast" >
               <div className="MCCasts"><strong>Top Casts</strong></div>
               <div>
                  <div >

                    {p}
                    
                   </div>                
               </div>
           </div>
           
        </div>
    );
}
export default MovieCasts;