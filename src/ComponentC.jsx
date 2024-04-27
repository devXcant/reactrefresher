import ComponentD from "./ComponentD"
import React,{useContext} from "react"
import { UserContext } from "./ComponentA"

const ComponentC = () => {

  const user = useContext(UserContext)

  return (
    <div>
        <h1 className="box">Component C</h1>
        <h2>{`Welcome ${user} to Component C`}</h2>
        <ComponentD />
    </div>
  )
}

export default ComponentC