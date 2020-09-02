import React from 'react';
import '../Modal/Backdrop.css'

const Backdrop = (props) => (
    props.showB ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default Backdrop;
