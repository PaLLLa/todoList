import React, { Component } from "react";
import './search-panel.css';
import ItemStatusFilter from "../item-status-filter";

export default class SearchPanel extends Component{
    
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    const label = e.target.value;
    this.setState({label});
    this.props.onSearchChange(label);
  }

  onFilterChange = (filter) => {
    this.props.filterChange(filter);
  }

  render(){

    return(
    <div className='row gx-1 gy-1 d-flex'>
      <input placeholder="search" className='form-control' onChange={this.onLabelChange} value={this.state.label}/>
      <ItemStatusFilter onFilterChange={this.onFilterChange}/>
    </div>)
    }
}