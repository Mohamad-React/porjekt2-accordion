import React from 'react';
import ShowDetails from './ShowDetails';
import "./Accordion.css";

const Accordion = () => {
    return (
        <div className='container'>
            <span >what do you want ?</span>
            <div>
           <ShowDetails/>
            </div>
        </div>
    );
}

export default Accordion;
