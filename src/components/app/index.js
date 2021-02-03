import AddItem from '../add-item';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todolist';
import ItemStatusFilter from '../item-status-filter';
import { Component } from 'react';

export default class App extends Component{
    maxId = 100;

    state = {
        todoData: [],
        searchInputValue:''
    };
    
    componentDidMount() {
        const value = localStorage.getItem('todoData')
        if (value === null) {
            return;
        } 
        
        this.setState(() => {
            return{
                todoData: JSON.parse(value)
            }
        })
    }
    
    // toggleProperty(arr, id, propName) {
        
    //         const idItem = arr.findIndex((el) => el.id === id);

    //         const oldItem = arr[idItem];
    //         const newItem = {...oldItem, [propName]: !oldItem[propName]};

    //         // const newArr = [...arr.slice(0, idItem), newItem, ...arr.slice(idItem + 1)];

    //         // const arr = todoData.filter((item) => item.id !== id);
    //         // const newArr = [...arr, newItem];

    //         return [
    //             ...arr.slice(0, idItem), 
    //             newItem, 
    //             ...arr.slice(idItem + 1)
    //         ];
    // }


    onToggleImportant = (id) => {
        console.log('i', id)
        this.setState(({ todoData }) => {
            const idItem = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idItem];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArr = [...todoData.slice(0, idItem), newItem, ...todoData.slice(idItem + 1)];

            // const arr = todoData.filter((item) => item.id !== id);
            // const newArr = [...arr, newItem];

            return {
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) => {
        console.log('d', id)
        this.setState(({ todoData }) => {
            const idItem = todoData.findIndex((el) => el.id === id);

            const oldItem = todoData[idItem];
            const newItem = {...oldItem, done: !oldItem.done};
            const newArr = [...todoData.slice(0, idItem), newItem, ...todoData.slice(idItem + 1)];
            // const arr = todoData.filter((item) => item.id !== id);
            // const newArr = [...arr, newItem];

            return {
                todoData: newArr
            }
        })
    }

    onItemAdd = (text) => {
        const newItem = {
            label: text,
            important:false,
            done:false,
            id: this.maxId++
        }

        const newArr = [...this.state.todoData, newItem];

        this.setState(({ todoData }) => {
           
            return{
                todoData: newArr
            }
        })
        localStorage.setItem('todoData', JSON.stringify(newArr));
    }

    deleteItem = (id) => {

        const todoData = JSON.parse(localStorage.getItem('todoData'));

        const todoDataNew = todoData.filter((item) => item.id !== id);
        localStorage.setItem('todoData', JSON.stringify(todoDataNew));
        this.setState(({todoData}) => {
            
            return{
                todoData: todoDataNew
            }
        })
    };
    onSearchChange = ( searchInputValue ) => {
        this.setState({ searchInputValue })
    }
    search (array, searchInputValue) {
        if (searchInputValue.length === 0) {
            return array;
        }

        return array.filter((item) => {
            return item.label.toLowerCase().indexOf(searchInputValue.toLowerCase()) > -1
        })
    }
    render() {
        const doneItemCount = this.state.todoData.filter((el) => el.done).length;
        const allItemsCount = this.state.todoData.length - doneItemCount;

        const { todoData, searchInputValue } = this.state;
        const visiblePosts = this.search(todoData, searchInputValue);

        return(
            <>
                <AppHeader toDo={allItemsCount} done={doneItemCount} />
                <SearchPanel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter/>
                <TodoList posts={visiblePosts}
                            onDeleted={ (id) => this.deleteItem(id)}
                            onToggleDone={this.onToggleDone}
                            onToggleImportant={this.onToggleImportant}/>
                <AddItem onItemAdd={this.onItemAdd}/>
            </>

        )
    }
}

