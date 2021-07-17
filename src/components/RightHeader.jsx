import { Avatar, Button, IconButton } from '@material-ui/core';
import {
  Apps,
  PersonOutline,
  RefreshOutlined,
  SearchOutlined,
  SettingsOutlined,
  ViewStreamOutlined,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import './RightHeader.css';
import SearchBarComponent from './SearchBarComponent';

const RightHeader = () => {
  const [user] = useAuthState(auth);
  const [width, setWidth] = useState(window.innerWidth);

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

  const logout = () => {
    auth.signOut();
  };

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
      <Button style={{borderRadius:"50%"}}  onClick={logout}>
        <Avatar className='avatar' src={user.photoURL} />
      </Button>
    </div>
  );
};

RightHeader.propTypes = {};
export default RightHeader;
