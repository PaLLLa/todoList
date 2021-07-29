import React from "react";
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted,
                    onToggleImportant,
                    onToggleDone }) => {
    //Function for each items
  const elements = todos.map((item) => {

    
    const { id, ...itemProps} = item;
    


    return(
      <li key={id} className="list-group-item">
        <TodoListItem { ...itemProps  } 
                      onDeleted={() => onDeleted(id)}
                      onToggleDone={() => onToggleDone(id)}
                      onToggleImportant={() => onToggleImportant(id)}/>
      </li>
    );
  });

  //Add items to unordered list
  return (
    <ul className="list-group todo-list">
       { elements }
    </ul>
    );
}
export default TodoList;