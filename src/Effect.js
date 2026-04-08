import {useEffect} from 'react'

export default function Effect() {
    useEffect(()=>{
        console.log("Component Loaded");
    })
  return (
    <div>
      <h1>This is effect component</h1>
    </div>
  )
}
