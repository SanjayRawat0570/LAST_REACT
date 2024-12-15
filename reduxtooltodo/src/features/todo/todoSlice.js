import {createSlice, nanoid} from '@reduxjs/toolkit';

const initilState = {
    todos: [{id: 1, text: "sanjay"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState: initilState,

    reducers: {
        addTodo:(state, action) => {
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)  
        },

        // export const todoSlice = createSlice({
        //     name : 'todo',
        //     initialState,
        //     reducers: {

        //     }
        }  
});
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
