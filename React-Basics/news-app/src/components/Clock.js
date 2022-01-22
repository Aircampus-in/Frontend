import React, {useState, useEffect} from 'react';


function Clock (){

    const [date, setDate] = useState(new Date());

    function refreshClock(){
        setDate(new Date());
    }

    useEffect(()=> {
        setInterval(refreshClock, 1000);
        // console.log('useEffect')
        return function cleanup(){
            clearInterval();
            // console.log('cleanup')
        };
    });

        return(
            <div className="timer">{date.toLocaleTimeString()}</div>
        )
    }


export default Clock;