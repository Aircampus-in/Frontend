import React, {useState, useEffect} from 'react';


function Clock (){

    const [date, setDate] = useState(new Date());

    function refreshClock(){
        setDate(new Date());
    }

    useEffect(()=> {
        const timer = setInterval(refreshClock, 1000);
        return function cleanup(){
            clearInterval(timer);
        };
    }, []);

        return(
            <div className="timer">{date.toLocaleTimeString()}</div>
        )
    }


export default Clock;