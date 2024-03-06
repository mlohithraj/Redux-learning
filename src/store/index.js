import { createStore } from 'redux';

const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 2,
    };
  }
  return {
    counter: state.counter + 2,
  };
};

const store = createStore(counterReducer);


export default store;