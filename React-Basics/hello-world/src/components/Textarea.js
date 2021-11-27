import React, {useState} from 'react'

export default function Text(){

    const[text, setText] = useState('Enter text Here')
    const[name, setName] = useState('Enter Name')
    const[fullName, setFullName] = useState('')

    const handleChange =(event)=>{
        setText(event.target.value)
    }

    const handleClick =()=>{
        setText(text.toUpperCase()); 
    }

    const handleSubmit= (event)=>{
        setFullName(name)
        console.log(fullName);
    }

    const handleNameChange= (event)=>{
        setName(event.target.value)
    }
    return(
        <div>
            <h2>Enter Text to and convert to uppercase</h2>
            <h2>Hello {fullName}</h2>
            <textarea value={text} onChange={handleChange}  rows="5" cols="90" ></textarea>
            <input type="text" onChange={handleNameChange}/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClick}>Uppercase</button>
        </div>
    )
}