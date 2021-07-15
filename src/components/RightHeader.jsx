import { IconButton } from '@material-ui/core';
import {
  Apps,
  PersonOutline,
  RefreshOutlined,
  SearchOutlined,
  SettingsOutlined,
  ViewStreamOutlined,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './RightHeader.css';
import SearchBarComponent from './SearchBarComponent';

const RightHeader = () => {
  const [width, setWidth] = useState(window.innerWidth);

  console.log(width);

  const searchBarBoolean = width >= 771;

  const resizeCallBack = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeCallBack);
    return () => {
      window.removeEventListener('reset', resizeCallBack);
    };
  });

  return (
    <div className='rightheader'>
      {searchBarBoolean && <SearchBarComponent />}
      {/* Serach Icon */}
      {!searchBarBoolean && (
        <IconButton>
          <SearchOutlined />
        </IconButton>
      )}
      {/* Refresh Icon */}
      <IconButton>
        <RefreshOutlined />
      </IconButton>
      {/*ListView Icon  */}
      <IconButton>
        <ViewStreamOutlined />
      </IconButton>
      {/* Settins Icon */}
      <IconButton>
        <SettingsOutlined />
      </IconButton>
      {/* applications Icon */}
      <IconButton>
        <Apps />
      </IconButton>
      {/* Profile Icon */}
      <IconButton>
        <PersonOutline />
      </IconButton>
    </div>
  );
};

RightHeader.propTypes = {};
export default RightHeader;
