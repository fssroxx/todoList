import'./tdli.css';

const TodoListItem = ({ label, onDeleted, onToggleDone, 
    onToggleImportant, done, important}) => {
    
        
        
        let classNames;
        if (done) {
            classNames+=' done'
        }
        if (important) {
            classNames+=' important'
        }
       
        
        return(
            <>
            <span 
                className={ classNames }
                onClick={ onToggleDone }
            >
                { label }
            </span>
            <button
            onClick={ onToggleImportant }>imp</button>
            <button
            onClick={ onDeleted }>del</button>
        </>
        )
    
}

export default TodoListItem;
