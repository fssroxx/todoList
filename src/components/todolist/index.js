import TodoListItem from '../todolist-item';

const TodoList = ({posts, onDeleted, onToggleDone, onToggleImportant}) => {
    // const items = ['Learn JS', 'Learn React'];
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;

        return(
            <li key={id}> 
                <TodoListItem {...itemProps} 
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}/>
            </li> 
        )
    })

    return (
        <>
            <ul>
                { elements }
            </ul>
        </>
    )
}
export default TodoList;