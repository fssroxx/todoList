import TodoListItem from '../todolist-item';
import { connect } from 'react-redux';

const TodoList = () => {
    // const items = ['Learn JS', 'Learn React'];
    const elements = todoItems.map((item) => {
        const {id, ...itemProps} = item;

        return(
            <li key={id}> 
                <TodoListItem {...itemProps} 
                />
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

const mapStateToProps = ({todoItems}) => {
    return todoItems
}

export default connect(mapStateToProps)(TodoList);