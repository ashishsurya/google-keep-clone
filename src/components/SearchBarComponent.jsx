import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './SearchBarComponent.css';

const SearchBarComponent = () => {
  return (
    <div className='searchbarcomponent'>
      <SearchOutlined className='searchbaricon' fontSize="medium"/>
      <input type='text' placeholder='Search'/>
    </div>
  );
};

export default SearchBarComponent;
