import React, { useEffect, useState } from 'react'

function Clock() {
   const [clockState, setClockState] = useState()
   
   useEffect(() => {

    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString())
    }, 1000);
   }, [])
   
   return (
    <div className="jam">  
      <h2>{clockState}</h2> 
    </div>
  ); 
  
  
//   <div style={{fontSize:"45px"}}>{clockState}</div>;
}

export default Clock
