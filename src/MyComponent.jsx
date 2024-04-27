import { useState } from "react"


const MyComponent = () => {

    const[car, setCar]  = useState(
            {year:2024,
            make:'Ford', 
            model:'Mustang'})

     const handleYearChange = (e) => {
        setCar(c => ({...car,year: e.target.value}))
     }       

      const handleMakeChange = (e) => {
        setCar(c => ({...car, make: e.target.value}))
     } 

      const handleModelChange = (e) => {
        setCar(c => ({...car, model:e.target.value}))
     } 

  return (
    <>
        <div>
            <p>your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} id="" onChange={handleYearChange}/> <br />
            <input type="text" value={car.make} id="" onChange={handleMakeChange}/> <br />
            <input type="text" value={car.model} id="" onChange={handleModelChange}/> <br />
        </div>
    </>
  )
}

export default MyComponent