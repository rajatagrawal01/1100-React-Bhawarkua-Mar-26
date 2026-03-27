import './Props.css'
import Demo from './Demo'
import { Button } from 'bootstrap'
// export default function Props(props) {
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <h1>How are you {props.day}</h1>
//     </div>
//   )
// }

// export default function Props({name,day}) {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <h1>How are you {day}</h1>
//       <Demo name={name}/>
//     </div>
//   )
// }


// export default function Props({fncn,name}) {
//   return (
//     <div>
//       <button onClick={fncn} >{name}</button>
//     </div>
//   )
// }

export default function Props({user,marks}) {
  return (
    <div>
      <h1>Hi {user.name} , your age is {user.age}, and you live in {user.address}</h1>
      <h1>Hi {user.name} , your marks are {marks.join(',')}</h1>

    </div>
  )
}