import { Component } from "react";

export default class AddItem extends Component{
    state = {
        inputValue: ''
    }
    
    addItem = () => {

        this.props.onItemAdd(this.state.inputValue);
        this.clearInput();
    }
    clearInput = () => {
        this.setState(() => {
            return {
                inputValue: ''
            }
        })
    }

    changeItem = (e) => {
        console.log(e.target.value);
        const val = e.target.value;
        this.setState(() => {
            return{
                inputValue: val
            }
        })
    }

render () {

    return(
        <>
            <input value={this.state.inputValue} placeholder='what do u want to add?'
            onChange={this.changeItem}/>
            <button
            
            onClick={this.addItem}>add</button>
        </>
    )
}
    
}
