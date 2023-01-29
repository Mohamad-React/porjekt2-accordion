import React, { useState } from 'react';
import "./Showdetails.css";




const ShowDetails = ({titel,info}) => {
    const[showinfo,setShowinfo] = useState(false);
    
    return (
        <div className='header'>
         <div className='details'>
          <p>{titel}</p>
          <button onClick={()=>setShowinfo(!showinfo)}>{showinfo ? <p>-</p> : <p>+</p>}</button>
          </div> 
           
          <div className='info'>
            {showinfo && <p>{info}</p>}
          </div>
        </div>
    );
}

export default ShowDetails;
