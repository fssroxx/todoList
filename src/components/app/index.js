import AddItem from "../add-item";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todolist";
import ItemStatusFilter from "../item-status-filter";
import { Component } from "react";
import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [],
  };

  componentDidMount() {
    const value = localStorage.getItem("todoData");
    if (value === null) {
      return;
    }

    this.setState(() => {
      return {
        todoData: JSON.parse(value),
      };
    });
  }

  onToggleImportant = (id) => {
    console.log("i", id);
  };
  onToggleDone = (id) => {
    console.log("d", id);
  };
  onItemAdd = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    const newArr = [...this.state.todoData, newItem];

    this.setState(({ todoData }) => {
      return {
        todoData: newArr,
      };
    });
    localStorage.setItem("todoData", JSON.stringify(newArr));
  };

  deleteItem = (id) => {
    const todoData = JSON.parse(localStorage.getItem("todoData"));

    const todoDataNew = todoData.filter((item) => item.id != id);
    localStorage.setItem("todoData", JSON.stringify(todoDataNew));
    this.setState(({ todoData }) => {
      return {
        todoData: todoDataNew,
      };
    });
  };

  render() {
    return (
      <div className="app card border-primary mb-3">
        <AppHeader toDo={3} done={6} />
        <div className="search__group">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          posts={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItem onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}
