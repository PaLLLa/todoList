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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: 'all'//all, active, done
  }

  createTodoItem(label) {
    return {
        label,
        important: false,
        done: false,
        id: this.maxId++
    }
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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray
      }
    });
  }

  onToggleProperty(arr, id, propName){
    //Find id
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    //Create new item
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.onToggleProperty(todoData, id, 'important')
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.onToggleProperty(todoData, id, 'done')
      }
    });
  }

  search(items, term){
    if (term.length === 0){
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter){

    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done );
      case 'done':
        return items.filter((item) => item.done );
      default:
        return items;
    }
  }

  onSearchChange = (term) =>{
    this.setState({term});
  }

  setFilterChange = (filter) =>{
    this.setState({filter});
  }

  render(){
    const {todoData, term, filter} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    const visibleItem = this.filter(this.search(todoData, term), filter);

    return(
      <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-3"></div>      
          <div className = "col-sm-8 col-md-8 col-lg-6">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <SearchPanel onSearchChange={this.onSearchChange}
                         filterChange={this.setFilterChange}/>
            <TodoList todos={visibleItem} 
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