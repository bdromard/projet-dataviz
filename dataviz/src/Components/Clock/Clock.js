import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {

    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time) ;
    }

useEffect(()=> {
    setInterval(updateTime, 1000);
})
    
    console.log(time);
    
    return (
        <div> 
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Clock;