import { useReducer } from 'react'
import './App.css'


import {reducer, initialState} from './store/todolist'
import Task from './components/Task'
import { useState } from 'react'

function App() {

  const [val, setVal] = useState(false); 
  const label = "My Checkbox!" 
  return <>
      <Checkbox value={val} setValue={setVal} label={label}></Checkbox>
  </>
}

export default App
