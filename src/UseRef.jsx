import React,{useState, useEffect, useRef} from 'react'

const UseRef = () => {

    const inputRef = useRef(null)
    const ref = useRef(0)

    useEffect(()=> {
        console.log('component rendered')
    })

    function handleclick(){
        ref.current = ref.current + 1
        console.log(ref.current)

        // inputRef.current.focus()
    }

  return (
    <div>
        <button onClick={handleclick}>
            click me!
        </button>
        {/* <input ref={inputRef}/> */}
    </div>
  )
}

export default UseRef