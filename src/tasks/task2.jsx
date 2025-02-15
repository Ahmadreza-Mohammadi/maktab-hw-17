import React, { useReducer, useState } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.step };
    case 'decrement':
      return { count: state.count - action.step };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Task2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', step })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', step })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <div>
        <label>
          Step:
          <input type="number" value={step} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};

export default Task2;
