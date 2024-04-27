import { useState } from "react"


const ArrayOfObjects = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('')
    const [carModel, setCarModel] = useState('')


    const AddCar = () => {
        const newCar = {year: carYear, 
                        make: carMake, 
                        model:carModel}

         setCars(c => [...c, newCar])    
         setCarYear(new Date.getFullYear())           
         setCarMake('')           
         setCarModel('')           
    }

    const RemoveCar = (index) => {
        setCars(c => c.filter((_,i) => i !== index))
    }

    const YearChange = (e) => {
        setCarYear(e.target.value)
    }

    const MakeChange = (e) => {
        setCarMake(e.target.value)
    }

    const ModelChange = (e) => {
        setCarModel(e.target.value)
    }

  return (
    <>
        <div>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={()=>RemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}

            </ul>
            <input type="number" value={carYear} onChange={YearChange}/>
            <input type="text" value={carMake} onChange={MakeChange} placeholder="enter car make"/>
            <input type="text" value={carModel} onChange={ModelChange} placeholder="enter car model"/>
            <button onClick={AddCar}>Add Car</button>
        </div>
    </>
  )
}

export default ArrayOfObjects