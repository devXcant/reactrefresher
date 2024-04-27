import {useState} from 'react'


const UseState = () => {

    const  [name,setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed]= useState(false)

    const updateName = () => {
       setName('Ayor')
    }

    const incrementAge = ()=>{
        setAge(age +1 );
    }

    const toggleEmployedStatus =()=> {
        setIsEmployed(!isEmployed)
    }

  return (
    <>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>increment Age</button>

            <p>isEmployed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmployedStatus}>toggle</button>
        
        </div>
    </>
  )
}

export default UseState