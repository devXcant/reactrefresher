import { useState,createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();
const ComponentA = () => {

    const [user,setUser] = useState('Ayor')

  return (
    <div>
        <h1 className="box">Component A</h1>
        <h2>{`Hello ${user}`}</h2>

        <UserContext.Provider value={user}>
            <ComponentB user={user}/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA