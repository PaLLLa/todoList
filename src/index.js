import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemAddForm from './components/item-add-form';
//CSS

import './index.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3},
    ]
  }

  deleteItem = (id) =>{
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newTodos = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return{
        todoData: newTodos
      }
    });
  }
  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }
    });
  }
  onToggleImportant = (id) => {
    console.log('Important', id);
  }
  onToggleDone = (id) => {
    console.log('Done', id);
  }


  render(){
    return(
      <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-3"></div>      
          <div className = "col-sm-8 col-md-8 col-lg-6">
            <AppHeader toDo={1} done={3}/>
            <SearchPanel />
            <TodoList todos={this.state.todoData} 
                      onDeleted={this.deleteItem}
                      onToggleDone={this.onToggleDone}
                      onToggleImportant = {this.onToggleImportant}/>
            <ItemAddForm onAddClick={this.addItem}/>
          </div>
      </div>
    )
  }
  
}


ReactDOM.render(<App />, document.getElementById('root'));