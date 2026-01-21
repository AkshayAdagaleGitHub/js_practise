import React, {useEffect} from 'react'

const MounOnStateChange = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to : ${count}`);
  },[count])

  return (
    <div>
      <div>Mount On State Change, Count : {count} </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default MounOnStateChange;