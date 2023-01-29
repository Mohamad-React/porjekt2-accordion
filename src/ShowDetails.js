import React, { useState } from 'react';
import "./Showdetails.css";




const ShowDetails = () => {
    const[showinfo,setShowinfo] = useState(false);
    
    return (
        <div className='containerr'>
         <div className='details'>
          <button onClick={()=>setShowinfo(!showinfo)}>{showinfo ? <p>-</p> : <p>+</p>}</button>
          <p>titel</p>
          </div> 
           
          <div className='info'>
            {showinfo && <p>infoooooooo</p>}
          </div>
        </div>
    );
}

export default ShowDetails;
