import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button 
          onClick={decrement} 
          style={styles.button} 
          disabled={count === 0}  
        >
          Decrement
        </button>
        <button onClick={reset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#56021F',
    color: 'white',
   
  },
 
};

export default CounterApp;