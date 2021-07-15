import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';
import './LeftHeader.css';
const LeftHeader = () => {
  return (
    <div className='leftheader'>
      <IconButton>
        <Menu />
      </IconButton>

      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img
          className='logo'
          src='https://seeklogo.com/images/G/google-keep-logo-31477E247C-seeklogo.com.png'
          alt='Logo'
        />
        <p className='logo__title'>Keep</p>
      </div>
    </div>
  );
};

LeftHeader.propTypes = {};
export default LeftHeader;
