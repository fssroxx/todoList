import { Component } from "react";
import'./tdli.css';

const TodoListItem = () => {
    
    //     state = {
    //         done: false
    //     }
    
    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // }

    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         }
    //     })
    // }

    
        // const { label, onDeleted, onToggleDone, onToggleImportant} = this.props;
        // const { done, important } = this.state;
        // let classNames;
        // if (done) {
        //     classNames+=' done'
        // }
        // if (important) {
        //     classNames+=' important'
        // }
        // const liStyle = {
        //     color: important ? 'tomato' : 'black'
        // };
        
        return(
            <>
            <span 
                className={classNames}
                
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


