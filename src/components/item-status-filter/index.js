import { Component } from "react";
export default class ItemStatusFilter extends Component{
    render() {

        return(
            <>
                <button>All</button>
                <button>Active</button>
                <button>Done</button>
            </>
        )
    }
}