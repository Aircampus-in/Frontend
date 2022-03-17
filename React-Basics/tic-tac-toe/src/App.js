import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './features/counter/counterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)


  return (
    <>
    <button onClick={()=>dispatch(increment(1))}>+</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement(1))}>-</button>
    </>
  );
}

export default App;
