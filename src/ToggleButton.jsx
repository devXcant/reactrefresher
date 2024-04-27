import { useState } from "react"


const ToggleButton = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam autem hic maiores recusandae, veritatis placeat enim officiis architecto quas nostrum laborum! Nobis, minus sint corporis quae doloribus debitis nihil aut?'
   
    const [drop, setDrop] = useState('');
    const [emoji, setEmoji] = useState('👇')

    const [color, setColor] = useState('#000000')
    

    const dropButton = () => {
        const newText = drop === '' ? text : '';
        const newEmoji = drop === ''? '☝' : emoji;

        setDrop(newText)
        setEmoji(newEmoji)
    }

    const changeColor = () => {

       

        setColor(c => c === color ? '#d3ded3' : color)
    }

  return (
    <>
        <div>
            <div className="big">
                <h1>Whats your opinion about this? </h1>
                <button onClick={dropButton}>{emoji}</button>
            </div>
            <p>{drop}</p>


            <div>
                <div className="big">
                    <h2>Change background</h2>
                    <button onClick={changeColor}>💡</button>
                    
                </div>
                <div className="big">
                    <div className="bg-color" style={{backgroundColor : color}}>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ToggleButton