import './App.css';
import {useState, useEffect} from 'react';

const Counter=()=> {

  const[count, setCount]= useState(0)
  const[isVisible, setIsVisible] = useState(true)

  useEffect(()=>{
    console.log('Use Effect')
    if(count>0){
    document.title=`New Notification (${count})`}
  },[count])

  
console.log('counter')

  return (
    <div className='container'>
      <p>You clicked {count} times</p>
      {isVisible? <p>Helloo!!</p> : ''}
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

    </div>
  );



}
 
export default Counter;
