import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './features/counter/counterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  // const increment=()=>{
  //   dispatch(increment())
  // }

  // const decrement=()=>{
  //   dispatch(decrement())
  // }
  return (
    <>
    <button onClick={()=>dispatch(increment())}>+</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
