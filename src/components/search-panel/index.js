import React from "react";
import './search-panel.css';
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = () => {
    return(
      <div className='row gx-1 gy-1'>
        <div className='col-lg-9 col-md-7 col-sm-6'>
          <input placeholder="search" className='form-control'/>
        </div>
        <div className = 'col-lg-3 col-md-3 col-sm-3'>
          <ItemStatusFilter />
        </div>
      </div>
    );
}

export default SearchPanel;