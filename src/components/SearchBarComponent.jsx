import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './SearchBarComponent.css';

const SearchBarComponent = () => {
  return (
    <div className='searchbarcomponent'>
      <SearchOutlined className='menuicon' fontSize={'large'} />
      <input type='text' placeholder='Search'/>
    </div>
  );
};

export default SearchBarComponent;
