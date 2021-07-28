import React, {Component} from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component{


    render(){
        const {label, onDeleted,
               onToggleImportant,
               onToggleDone,
               important, done} = this.props;

        let classNames = 'todo-list-item col-lg-10 col-md-10 col-sm-10';
        
        if (done){
            classNames += ' done';
        }
        if (important){
            classNames += ' important';
        }

        
        return (
            <div className='row gx-1'>
                <span className={classNames} onClick={ onToggleDone }>
                    {label}
                </span>
                    <div className='btn-group mb-1 col-lg-1 col-md-1 col-sm-1'>
                        <button type='button' className='btn btn-outline-secondary' onClick={onDeleted}>
                            <i className="bi bi-trash-fill"></i>
                        </button>
                        <button type='button' className='btn btn-outline-secondary' onClick={onToggleImportant}>
                        <i className="bi bi-exclamation"></i>
                        </button>
                    </div>
            </div>)
    }

}
