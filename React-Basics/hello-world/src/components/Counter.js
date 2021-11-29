import React,{useState} from 'react';
import '../App.css';



const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(true);

    function incrementer(){
        setCounter(counter + 1);
    }

    function decrementer(){
        setCounter(counter - 1);
    }

    function reset(){
        setCounter(0);
    }

    function dissapears(){
        setToggle(!toggle);
    }
    return(
        <>
        <h6 className={toggle? 'inactive' : 'appear' }> Its visible </h6>
        
        <div className="counter">{counter}</div>
        <button className="counter-btn" onClick={incrementer}>Plus</button>
        <button className="counter-btn" onClick={decrementer}>Minus</button>
        <button className="counter-btn" onClick={reset}>Reset</button>
        <button className="counter-btn" onClick={dissapears}>Toggle</button>
        </>
    )
}


export default Counter;