import { Component } from "react";
import "./item-status-filter.css";
export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="button__group">
        <button className="btn btn-success ">Все</button>
        <button className="btn btn-outline-primary ">Активные</button>
        <button className="btn btn-outline-primary">Выполненные</button>
      </div>
    );
  }
}
