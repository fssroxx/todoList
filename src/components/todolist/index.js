import TodoListItem from "../todolist-item";
import './todolist.css';

const TodoList = ({ posts, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="toast-body item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};
export default TodoList;
