import { useState } from "react"


// useState

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

  return (
    <>
            <div>
                <p>increment</p>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <p>decrement</p>
                <button onClick={decrement}>-</button>
            </div>
            <div>
                <p>{count}</p>
            </div>
            <div>
                <p>reset</p>
                <button onClick={reset}>reset</button>
            </div>
    </>
    
  )
}

// updater with useState

// const Counter = () => {

//     const [count, setCount] = useState(0)

//     const increment = () =>{
//         setCount(c => c + 1);
//     }

//     const decrement = () =>{
//         setCount(c => c - 1);
//     }

//     const reset = () =>{
//         setCount(c => c = 0);
//     }

//   return (
//     <>
//             <div>
//                 <p>increment</p>
//                 <button onClick={increment}>+</button>
//             </div>
//             <div>
//                 <p>decrement</p>
//                 <button onClick={decrement}>-</button>
//             </div>
//             <div>
//                 <p>{count}</p>
//             </div>
//             <div>
//                 <p>reset</p>
//                 <button onClick={reset}>reset</button>
//             </div>
//     </>
    
//   )
// }

export default Counter