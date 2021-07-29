import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component{

    state = {
        classNameAll: 'btn btn-secondary',
        classNameActive: 'btn btn-outline-secondary',
        classNameDone: 'btn btn-outline-secondary'
    }

    filterActive = () => {
        this.setFilter('active');
        this.props.onFilterChange('active');
    }

    filterDone = () => {
        this.setFilter('done');
        this.props.onFilterChange('done');
    }

    filterAll = () => {
        this.setFilter('all');
        this.props.onFilterChange('all');
    }

    setFilter = (filter) => {
        if (filter === 'all'){
            this.setState({
                classNameAll: 'btn btn-secondary',
                classNameActive: 'btn btn-outline-secondary',
                classNameDone: 'btn btn-outline-secondary'
            });
        } else if (filter === 'done'){
            this.setState({
                classNameAll: 'btn btn-outline-secondary',
                classNameActive: 'btn btn-outline-secondary',
                classNameDone: 'btn btn-secondary'
            });
        } else if (filter === 'active'){
            this.setState({
                classNameAll: 'btn btn-outline-secondary',
                classNameActive: 'btn btn-secondary',
                classNameDone: 'btn btn-outline-secondary'
            });
        }
    }

    render(){

        return(
            <div className='btn-group item-status-filter'>
                <button type='button' className={this.state.classNameAll} onClick={this.filterAll}>All</button>
                <button type='button' className={this.state.classNameActive} onClick={this.filterActive}>Active</button>
                <button type='button' className={this.state.classNameDone} onClick={this.filterDone}>Done</button>
            </div>
        )
    }
}