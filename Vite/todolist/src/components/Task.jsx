import { useReducer } from 'react'
import {useState} from 'react'
import './Task.css'

import {reducer, initialState} from '../store/todolist.jsx'

function Task() {
    const [task, setTask] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        disptach( { type : 'SET_TASK' , payload : task } );
    }

    return (
        <>
        <task onSubmit={handleSubmit}>
            <h1>list of task</h1>
            <input onChange={(e) => setTask(e.target.value) } type="text" name="task" value={task} /> 
        </task>
        </>
        
)
    
}

export default Task
