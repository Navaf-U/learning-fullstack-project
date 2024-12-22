import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from '../Slice/TodoSlice'
const store = configureStore({
    name:"Todo",
    reducer: TodoSlice
})

export default store