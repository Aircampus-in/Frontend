import React,{useState} from 'react'



const Counter = ()=>{
    const [counter, setCounter] = useState(0);

    function incrementer(){
        setCounter(counter + 1);
    }
    return(
        <>
        <div>{counter}</div>
        <button onClick={incrementer}>Click</button>
        </>
    )
}


export default Counter;