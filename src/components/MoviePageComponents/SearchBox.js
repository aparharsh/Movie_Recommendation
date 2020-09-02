import React, { useState } from 'react';
import './SearchBox.css';
import { Link } from 'react-router-dom';

const SearchBox = (props) => {

     // for array of titles recieved form api.
     const [a, setA] = useState( [] );

     // for changing the styling of a list element.
     const [hovIdx, setHovIdx] = useState( '' );
 
     // calling suggestions API.
     const suggest = (e) => {
         setHovIdx('')
         console.log(e.target.value)
         if(e.target.value===''){
             setA([])
         }
         else{
         fetch('http://127.0.0.1:5000/suggestions', {
             method: 'POST',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify({title:e.target.value})
         })
         .then(response => response.json())
         .then(data => setA(data));
     }
     }
 
     // clicking a suggestion or clciking enter in the input box, will send to another page.
     const send = (e) => {
         console.log(e.currentTarget.innerText)
     }
 
     // when mouse hover over the list item
     const chng = (e) => {
         remov()
         console.log(e.currentTarget.id)
         setHovIdx(e.currentTarget.id)
         e.currentTarget.style.fontSize='20px'
 
     }
 
     // when mouse stops  hovering over the list item.
     const revChng = (e) => {
         remov()
         setHovIdx('')
         e.currentTarget.style.fontSize='15px'
     }
 
     // when use keyboard to move over the list items
     const keyChng = (e) => {
 
         // this call is so as to load the DOM completely. Else, there were errors.
         if (document.getElementById(0)){
 
             console.log(hovIdx)
             if (e.keyCode === 38){
                 console.log('up')
                 
                 if (hovIdx===0 || hovIdx===''){
                     return;
                 }
                 
                 else{
                     remov()
                     setHovIdx((Number(hovIdx)-1).toString())
 
                     let x=document.getElementById(Number(hovIdx)-1)
                     x.style.fontSize='20px'
                     
                 }
             }
             else if (e.keyCode === 40){
                 console.log('down')
 
                 if (hovIdx == a.length-1) {
                     return;
                 }
 
                 else if (hovIdx==='') {
                     setHovIdx('0')
                     
                     let x=document.getElementById(0)
                     x.style.fontSize='20px'
                 }
 
                 else{
                     remov()
                     setHovIdx((Number(hovIdx)+1).toString())
 
                     let x=document.getElementById(Number(hovIdx)+1)
                     x.style.fontSize='20px'
                 }
             }
             else if (e.keyCode === 13){
                 console.log('enter')
 
                 let x=document.getElementById(hovIdx)
                 console.log(x.innerText)
             }
         }
     }
 
     // this is to remove the previous set CSS to any list 
     const remov = () => {
         
             for (let index = 0; index < a.length; index++) {
                 if(document.getElementById(index)){
                 document.getElementById(index).style.fontSize='15px'
             }
         }
     }
 
     // setting suggestions list which is to be displayed.
     let sug;
 
     if (a){
         sug = (
             <ul style={{backgroundColor:'transparent', marginTop:'5px', listStyleType:'none', textAlign:'left', paddingInlineStart:'0px',  marginBlockStart:'5px', marginBlockEnd:'5px' }}>
                 {a.map((s,idx) => {
                     return(
                         // the key is to remove the warning... "Each child in list should have a unique key".
                         <li style={{display:'block', padding:'5px', paddingLeft:'15px', margin:'5px', backgroundColor:'white', borderRadius:'5px'}}
                          className='suggestion' key={idx} id={idx} onClick={send} onMouseOver={chng} onMouseOut={revChng} >
                             {s}
                         </li>
                     )
                 })}
             </ul>
         )
     }

    console.log('SearchBoxProps',props);
    return(
        <div className="SearchBox" >
            <label htmlFor="search"></label>

            <input className="Round" type="text" placeholder="search" value={props.data.searchtypeq} onChange={suggest} onKeyDown={keyChng} onChange={props.ontype2} /> 
            <Link to="/movie">
                <button className="SearchButton" type="submit" onClick={props.onEnter2}>
                    <span className="SearchIcon">
                        <i className="fa fa-search"></i>
                    </span>
                </button>
                {sug}
            </Link>
        </div>
    );
}
export default SearchBox;