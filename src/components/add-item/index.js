import { Component } from "react";
import './add-item.css';

export default class AddItem extends Component {
  state = {
    inputValue: "",
  };

  addItem = () => {
    this.props.onItemAdd(this.state.inputValue);
    this.clearInput();
  };
  clearInput = () => {
    this.setState(() => {
      return {
        inputValue: "",
      };
    });
  };

  changeItem = (e) => {
    console.log(e.target.value);
    const val = e.target.value;
    this.setState(() => {
      return {
        inputValue: val,
      };
    });
  };

  render() {
    return (
      <div className='addItem'>
        <input
          value={this.state.inputValue}
          placeholder="что добавим?"
          onChange={this.changeItem}
        />
        <button className="btn btn-outline-primary" onClick={this.addItem}>
          Добавить
        </button>
      </div>
    );
  }
}
