import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{

    onLabelChange = () => {
        console.log('/');
    }

    render(){
        return(
            <div className='item-add-form d-flex'>
                <input type='text' className='form-control' onChange={this.onLabelChange} placeholder='What needs to be done' />
                <button className='btn btn-outline-secondary' onClick={() => this.props.onAddClick('Hello World')}>Add</button>            
            </div>
        )
    }
}