import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToTodo } from '../Slice/TodoSlice'
function InputTodo() {
    const {Todo} = useSelector(state => state)
    const dispatch = useDispatch()    
    const [state,setState] = useState("")
    console.log(Todo)
    const handle  = () =>{
    dispatch(addToTodo(state))
    setState("")
    }
    return (
    <div>

      <input value={state} onChange={(e)=>setState(e.target.value)} type="text" className="border-2 border-red-500" />
       <button onClick={handle}> ADD</button>
        {Todo?.map((i)=>{
            return <li key={i}>{i}</li>
        })}
    </div>
  )
}

export default InputTodo
