import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@material-ui/icons';
import './LeftHeader.css';
const LeftHeader = () => {
  return (
    <div className='leftheader'>
      <Menu className='menuicon' fontSize={'large'}/>
      <img
        className='logo'
        src='https://seeklogo.com/images/G/google-keep-logo-31477E247C-seeklogo.com.png'
      alt="Logo"/>
    </div>
  );
};

LeftHeader.propTypes = {};
export default LeftHeader;
