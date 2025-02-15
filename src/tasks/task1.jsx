import React, { useRef, useEffect, useState } from 'react';

const Task1 = () => {
  const inputRef = useRef(null);
  const prevValueRef = useRef('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Current Value:', inputValue);
    console.log('Previous Value:', prevValueRef.current);
    prevValueRef.current = inputValue;
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Task1;
