import React from "react";
import './search-panel.css';
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = () => {
    return(
      <div className='row gx-1 gy-1 d-flex'>
        <input placeholder="search" className='form-control'/>
          <ItemStatusFilter />
      </div>
    );
}

export default SearchPanel;