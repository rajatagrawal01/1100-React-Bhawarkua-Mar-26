import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo.js"
import Props from "./Props.js";



// function App() {
//   return (
//     // <div className="App" >
//     //   <h1>Welcome Class</h1>
//     //   <Demo/>
//     // </div>

//     // <>
//     //   <Props name="Shubhangi" day="tomorrow"/>
//     //   <Props name="Nikita" day="today"/>
//     //   <Props name="Praveen" day="today"/>
//     //   <Props name="Karan" day="today"/>

//     // </>
//   );
// }


// function App() {
//   const sayHello = ()=>{
//     console.log("Hello class");
//   }
//     const sayBye = ()=>{
//     console.log("Bye class");
//   }
//   return (
//     <>
//       <Props fncn={sayHello} name="Signin"/>
//       <Props fncn={sayBye} name="Signup"/>

//     </>
//   );
// }



function App() {
  const userData={
    name:"Student",
    age:"237894",
    address:"Indore"
  }

  const marks=[34,45,57,78,23]
  return (
    <>
    <Props user={userData} marks={marks}/>
    </>
  );
}

export default App;