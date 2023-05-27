//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';

import CardList from './components/card-list/catd-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      monsters:[],
      searchField: ''
      
    };

  }
//lifecycle methods
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( (users) => this.setState(()=>{
      return {monsters: users}
    }, ()=>{
      console.log(this.state);
    }));
}

onSearchChange = (event)=>{

  const searchField = event.target.value.toLowerCase() ;

  this.setState({searchField})
}

  render() {

    const filteredValues = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

  return (
    <div className="App">
      <h1 className='app-title'> The Monsters </h1>
      <SearchBox onChangeHandler={this.onSearchChange} placeholder='search-monster' className='search-box-monster'/>
      <CardList monsters={filteredValues}/>
    </div>
    
  );
  }
}

export default App;
