import React from 'react';
import ShowDetails from './ShowDetails';
import "./Accordion.css";
import data from "./Fakeapi";
import { useState } from 'react';
const Accordion = () => {
    const [mydata,setMydata] = useState(data);
    return (
        <div className='container'>
            <span >what do you want ?</span>
            <div className='alldetail'>
           {mydata.map((items,index)=><ShowDetails  {...items} key={index}/>)}
            </div>
        </div>
    );
}

export default Accordion;
