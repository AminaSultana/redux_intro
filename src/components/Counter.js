import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state=>state.counter)
const dispatch = useDispatch()

const incrementHandler=()=>{
  dispatch({type:'increment'})
}

const decrementHandler=()=>{
  dispatch({type:'decrement'})
}

const incrementby5Handler=()=>{
  dispatch({type:'incrementby5'})
}
const decrementby5Handler=()=>{
  dispatch({type:'decrementby5'})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementby5Handler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decrementby5Handler}>decrement by 5</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
