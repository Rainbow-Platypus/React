import { useReducer } from 'react'
import {useState} from 'react'
import './Task.css'

import {reducer, initialState} from '../store/todolist.jsx'

function Number() {
    const [number, setNumber] = useState('');

    const handleClick = (e) =>{
        e.preventDefault();
        disptach( { type : 'SET_NUMBER' , payload : number } );
    }

    return (
        <>
        <number onSubmit={handleSubmit}>
            <h1>Random number</h1>
            <button onClick={(e) => setNumber(math.random)}/>
        </number>
        </>
        
)
    
}

export default Number
