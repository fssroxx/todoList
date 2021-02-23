
import'./tdli.css';
 
const TodoListItem = ({label, deleteItem}) => {

        return(
            <>
                <span> { label } </span>
                <button>imp</button>
                <button onClick={ deleteItem }>del</button>
            </>
        )
    
}

export default TodoListItem;
