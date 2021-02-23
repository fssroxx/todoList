import TodoListItem from '../todolist-item';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, initTodoAction, deleteTodoAction } from '../reduceStore/';
import AddItem from '../add-item';
import { useEffect } from 'react';


const TodoList = () => {
    const dispatch = useDispatch();
    const todoItems = useSelector((state) => { return state.todoItems});
    useEffect(() => {

        const value = localStorage.getItem('todoData')
        if (value === null) {
            return;
        } 
        dispatch(initTodoAction(JSON.parse(value)))
    }, [dispatch]);

    const deleteItem = (id) => {
        dispatch(deleteTodoAction(id));
        localStorage.setItem('todoData', JSON.stringify(todoItems.filter((item) => item.id !== id)
        ));
    }

    const onItemAdd = (text) => {
        
        const newItem = {
            label: text,
            important:false,
            id: Math.random()
        }
        dispatch(addTodoAction(newItem));
        localStorage.setItem('todoData', JSON.stringify([...todoItems, newItem]));
    }

    // const items = ['Learn JS', 'Learn React'];
   
    const elements = todoItems.map(({id, label}) => {
       

        return(
            <li key={id}> 
                <TodoListItem label={label} deleteItem={() => deleteItem(id)} 
                />
            </li> 
        )
    })

    return (
        <>
            <ul>
                { elements }
            </ul>
            <AddItem onItemAdd={onItemAdd}/>
        </>
    )
}



export default (TodoList);