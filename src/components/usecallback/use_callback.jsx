import React, { useCallback, useState } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [])
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}