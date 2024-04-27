import { useState } from "react"


const ToDoList = () => {

    const [tasks, setTasks] = useState(['Eat breakfast','Take shower','walk the dog']);
    const [newTasks, setNewTasks] = useState('');

    const handleInputChange = (e) => {
        setNewTasks(e.target.value)
    }

    const addTask = () => {

        if(newTasks.trim() !==''){
            setTasks(t=> [...t, newTasks]);
        setNewTasks('')
        }

        
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    const moveTaskDown = (index) => {
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }



    
  return (
    <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="enter a task"
                    value={newTasks}
                    onChange={handleInputChange}
                    />

                <button 
                    className="add-button"
                    onClick={addTask}
                    >Add</button>    
            </div>

            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span>
                        <button         className="delete-button"
                        onClick={()=>deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button         className="move-button"
                        onClick={()=>moveTaskUp(index)}
                        >
                            ✌
                        </button>
                        <button         className="move-button"
                        onClick={()=>moveTaskDown(index)}
                        >
                            😢
                        </button>
                    </li>
                )}
            </ol>
        </div>
    </>
  )
}

export default ToDoList