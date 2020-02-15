import React from 'react'

import './search-box.css'

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='Search people'
    onChange={props.onSearchChange}
  />
);
