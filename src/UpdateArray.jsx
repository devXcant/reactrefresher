import { useState } from "react"


const UpdateArray = () => {

    const [foods, setFoods] =useState(['Apple','Orange','Banana'])

    const handleAddFoods = ()=> {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = ''

        setFoods(f => [...f, newFood])
    }

     const handleRemoveFoods = (index)=> {
        setFoods( foods.filter((_,i) => i !==index
        ))
    }

  return (
    <>
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food,index) => 
                    <li key={index} 
                    onClick={() => handleRemoveFoods(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="enter food name"/>
            <button onClick={handleAddFoods}>Add food</button>
        </div>
    </>
  )
}

export default UpdateArray