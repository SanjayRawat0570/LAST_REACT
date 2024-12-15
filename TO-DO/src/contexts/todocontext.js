import { createContext, useContext} from 'react';
export const TodoContext = createContext({
    todos: [
        {
   id: 1,
   todos: 'Learn React',
    completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});
export const useTodo = () => {
    return useContext(TodoContext)
}
export const TodoProvider =  TodoContext.Provider