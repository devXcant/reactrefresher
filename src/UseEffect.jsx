import { useState, useEffect } from "react"


const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green')

    useEffect(()=> {
        document.title = `Count: ${count}`
    }, [count,color])

    const Add=()=> {
        setCount(c => c + 1)
    }
    const Subtract=()=> {
        setCount(c => c - 1)
    }
    const changeColor=()=> {
        setColor(c => c=== 'green' ? 'red' : 'green')
    }

  return (
    <>
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={Add}>Add</button>
            <button onClick={Subtract}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    </>
  )
}

export default UseEffect