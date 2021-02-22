import { createStore } from 'redux';


const initialState = {
    todoItems:[
        {label:'do nothing', id: 1},
        {label:'do smth', id: 2},
]
}

function todoListReducer (state = initialState, action) {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                newTodoListItem
            }
        case 'deleteTodo':
            return {
                ...state
            }
        default:
            return state
    }
}

let todoStore = createStore(todoListReducer);

const addTodo = () => {
    todoStore.dispatch(addTodoAction);
}

const deleteTodo = () => {
    todoStore.dispatch(deleteTodoAction);
}

const addTodoAction = { type: 'addTodo'};
const deleteTodoAction = { type: 'deleteTodo'};