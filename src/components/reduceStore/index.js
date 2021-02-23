import { createStore } from 'redux';


const initialState = {
    todoItems:[]
}

function todoListReducer (state = initialState, action) {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state, todoItems: [...state.todoItems, action.payload]
            }
        case 'deleteTodo':
            return {
                ...state, todoItems: state.todoItems.filter((item) => {
                    return item.id !== action.payload
                })
            }
        case 'initTodo':
            return {
                ...state, todoItems: action.payload
            }
        default:
            return state
    }
}

let todoStore = createStore(todoListReducer);

export const addTodoAction = (newItem) =>{return { type: 'addTodo', payload: newItem}} ;
export const deleteTodoAction = (id) =>  {return { type: 'deleteTodo', payload: id}};
export const initTodoAction = (newArr) =>  {return { type: 'initTodo', payload: newArr}};

export default todoStore;