import React, { useState, useMemo } from 'react';

const Task3 = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const sumOfEvens = useMemo(() => {
    console.log('Calculating sum of even numbers...'); 
    return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
        return sum + num;
      }
      return sum;
    }, 0);
  }, [numbers]);

  const addRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, randomNum]);
  };

  return (
    <div>
      <h1>List of Numbers:</h1>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Sum of Even Numbers: {sumOfEvens}</h2>
      <button onClick={addRandomNumber}>Add Random Number</button>
    </div>
  );
};

export default Task3;