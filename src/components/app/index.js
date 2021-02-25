
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todolist';
import ItemStatusFilter from '../item-status-filter';
import store from '../reduceStore'

import { Provider } from 'react-redux';

const App = () => {
    

    // maxId = 100;

    // state = {
    //     todoData: []
    // };
    
    // componentDidMount() {
    //     const value = localStorage.getItem('todoData')
    //     if (value === null) {
    //         return;
    //     } 
        
    //     this.setState(() => {
    //         return{
    //             todoData: JSON.parse(value)
    //         }
    //     })
    // }
    



    // onToggleImportant = (id) => {
    //     console.log('i', id)
    // }
    // onToggleDone = (id) => {
    //     console.log('d', id)
    // }
    
    // onItemAdd = (text) => {
    //     const newItem = {
    //         label: text,
    //         important:false,
    //         id: this.maxId++
    //     }

    //     const newArr = [...this.state.todoData, newItem];

        
    //     localStorage.setItem('todoData', JSON.stringify(newArr));
    // }

    // deleteItem = (id) => {

    //     const todoData = JSON.parse(localStorage.getItem('todoData'));

    //     const todoDataNew = todoData.filter((item) => item.id != id);
    //     localStorage.setItem('todoData', JSON.stringify(todoDataNew));
    //     this.setState(({todoData}) => {
            
    //         return{
    //             todoData: todoDataNew
    //         }
    //     })
    // };

    
        return(
            <>
               <Provider store={store}>
                   <div className="app card border-primary mb-3">
                        <AppHeader toDo={3} done={6} />
                        <SearchPanel/>
                        <ItemStatusFilter/>
                        <TodoList/>
                   </div>
                   
                    
                </Provider>
            </>

        )
    
}


export default App;