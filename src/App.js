import React, {Component} from 'react';
import {CardList} from "./card-list/card-list.component";
import './App.css';
import {SearchBox} from "./search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <SearchBox placeholder='search monsters' handleChange={e => this.setState({ searchField: e.target.value})}/>
                <CardList monsters={this.state.monsters}/>

            </div>
        );
    }
}

export default App;
