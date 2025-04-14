import { useReducer } from 'react'
import './App.css'

import { useState } from 'react'

const initialState = {
    list : [],
    number :''
};

function reducer(state, action){

    switch (action.type) {
        case 'ADD_NUMBER':
            const list = [ ...state.list, action.payload];

            return { ...state, list : list, number : '' };

        case 'NUMBER':
            return {
                ...state,
                number: action.payload
            }
        case 'SHUFFLE':
            return{

            }
        default:
            return state;
    }}

function App() {

    const [number, setNumber] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const shuffleList = (e) =>
        dispatch({type: 'SHUFFLE', payload: Math.random()});
}


    const handleClick = (e) =>{
        dispatch( { type : 'ADD_NUMBER' , payload : Math.random() } );
    }
    console.log(state.list);

    return (
        <>
            <h1>Random number</h1>
            <button onClick={handleClick}>Button</button>
            <ul>
                {state.list.map((number, i) => (
                    <li key={i}>{number}</li>
                ))}
            </ul>
            <button onClick={shuffleList}

        </>

    )
}

export default App