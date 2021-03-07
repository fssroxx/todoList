import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header card-header">
      <div className="edit_by__block">
        <h2>ToDoList</h2>
        <div className="wrapper">
          <h4>by</h4>
          <span className="edit_by">
            <em>FssRoxx</em>
          </span>
        </div>
      </div>
      <label>
        <span className="badge badge-primary badge-pill all_notes">{toDo}</span>{" "}
        осталось,{" "}
        <span className="badge badge-pill badge-success liked_notes">
          {done}{" "}
        </span>{" "}
        <span> сделано</span>
      </label>
    </div>
  );
};
export default AppHeader;
