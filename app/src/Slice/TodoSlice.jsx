import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    Todo : []
}
const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addToTodo:(state,action)=>{
            state.Todo.push(action.payload)
        }
    }

}) 

export default TodoSlice.reducer
export const {addToTodo} = TodoSlice.actions