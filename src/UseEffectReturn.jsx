import { useEffect, useState } from "react"


const UseEffectReturn = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=> {
        window.addEventListener('resize', handleResize)
        console.log('event listener added')

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    useEffect(()=> {
        document.title = `Size: ${width} x ${height}`
    },[width, height])

    
    

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

  return (
    <>
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    </>
  )
}

export default UseEffectReturn