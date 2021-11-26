import React, {useState} from 'react'

export default function Text(){

    const[text, setText] = useState('Enter text Here')

    const changeHandler =(event)=>{
        setText(event.target.value)
    }

    const clickHandler =()=>{
        setText(text.toUpperCase()); 
    }
    return(
        <div>
            <h2>Enter Text to and convert to uppercase</h2>
            <textarea value={text} onChange={changeHandler}  rows="5" cols="90" ></textarea>
            <button onClick={clickHandler}>Uppercase</button>
        </div>
    )
}