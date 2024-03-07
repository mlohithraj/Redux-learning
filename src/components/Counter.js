import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementHandlerBy2 = () => {
    dispatch(counterActions.incrementBy2(2));
  };

  const decrementHandlerBy2 = () => {
    dispatch(counterActions.decrementBy2(2));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>decrement By 5</button>
      </div>
      <div>
        <button onClick={incrementHandlerBy2}>Increment By 2</button>
        <button onClick={decrementHandlerBy2}>decrement By 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
