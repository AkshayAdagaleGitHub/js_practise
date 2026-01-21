import React, {useEffect} from 'react'

const MountOnce = () => {
  useEffect(() => {
    console.log("mount")
  },[])
  //[] -> Runs only once
  return <div>Check the console !</div>
}

export default MountOnce;