import { useEffect,useState } from "react";

export default function Effect() {
  const [name, setName] = useState("guest");
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);



  // Without Dep Array=====================================================
  // useEffect(() => {
  //   console.log("Component Loaded");
  // });

  // With Blank Dep Array=====================================================
  // useEffect(() => {
  //   console.log("With Dependency Array");
  // },[]);

  // With Dep Array=====================================================
  // useEffect(() => {
  //   console.log("Count Updated");
  // },[count]);

  // With Cleanup Function=====================================================
  useEffect(() => {
    console.log("Count Updated");
    return(()=>{
      console.log("Component Unmounted");
    })
  },[]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h1>{name}</h1>

      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <br />

      <button onClick={() => setIsVisible(!isVisible)}>Click Here</button>
      {isVisible && <p>Now you see</p>}
    </>
  );
}
