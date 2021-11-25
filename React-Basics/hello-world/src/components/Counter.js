import React,{useState} from 'react'



const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(true);

    function incrementer(){
        setCounter(counter + 1);
    }

    function dissapears(){
        setToggle(!toggle);
    }
    return(
        <>
        {toggle? <h6>It's visible</h6> : ''}
        
        <div>{counter}</div>
        <button onClick={incrementer}>Click</button>
        <button onClick={dissapears}>Toggle</button>
        </>
    )
}


export default Counter;