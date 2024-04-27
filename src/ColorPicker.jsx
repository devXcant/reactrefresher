import {useState} from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('#ffffff')

    const handlecolorChange = (e)=> {
        setColor(e.target.value)
    }

  return (
    
    <>
        <div>
            <h1>Color Picker</h1>
            <div style={{backgroundColor: color}}> 
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" name=""value={color} onChange={handlecolorChange}/>
        </div>
    </>
  )
}

export default ColorPicker