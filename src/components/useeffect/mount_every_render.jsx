import React, {useEffect, useState} from 'react'

const MountEveryRender = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mount")
  });// no dependency array, runs on every render

  return (
    <div>
      <div>Mount Every Render, count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>);
}