import React,{useContext} from "react"
import {UserContext} from './ComponentA'

const ComponentD = () => {

  const user = useContext(UserContext)

  return (
    <div>
        <h1 className="box4">Component D</h1>
        <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD