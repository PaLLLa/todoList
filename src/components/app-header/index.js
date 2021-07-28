import React, { Component } from "react";
import './app-header.css';

export default class AppHeader extends Component{
  
  render(){
    const {toDo, done} = this.props;
    return(
      <div className='row'>
        <h1 className='display-3 app-header col-7'>My Todo List</h1>
        <p className='my-p col-5'>To do {toDo} and done {done}</p>
      </div>
    );

  }
}