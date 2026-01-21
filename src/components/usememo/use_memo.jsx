import React, {useState, useMemo} from 'react'

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const expensiveFn = useMemo(() => {
    return heavyComputation(count);
  }, [count]); // Recomputes only if count changes

  return (
    <div>
      <div>UseMemo, Count : {count} </div>
      <div>Expensive Result : {expensiveFn}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

const heavyComputation = (count) => {
  console.log("Computing expensive result...");
  return count * 1000;
}

export default UseMemo;
