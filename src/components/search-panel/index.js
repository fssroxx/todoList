import {Component} from 'react';

export default class SearchPanel extends Component {
    
    state = {
        searchInputValue: ''
    }
    onSearchChange = (e) => {
        const searchInputValue = e.target.value; 
        this.setState({ searchInputValue }); 
        this.props.onSearchChange( searchInputValue );
    }
    render() {
        const searchText = 'Type Here to search'
        return(
            <input 
                placeholder={searchText}
                value={this.state.searchInputValue}
                onChange={this.onSearchChange}/>
        )
    }
    
    
}