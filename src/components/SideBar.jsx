import {
  ArchiveOutlined,
  CreateOutlined,
  DeleteOutlined,
  EmojiObjectsOutlined,
  NotificationsNone
} from '@material-ui/icons';
import React from 'react';
import SideBarComponent from './SideBarComponent';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className='sidebar'>
      {/* Notes */}
      <SideBarComponent Icon={EmojiObjectsOutlined} title='Notes' active/>
      {/* Reminders */}
      <SideBarComponent Icon={NotificationsNone} title='Remainders' />
      {/* Edit Labels */}
      <SideBarComponent Icon={CreateOutlined} title='Edit Labels' />
      {/* Archive */}
      <SideBarComponent Icon={ArchiveOutlined} title='Archive' />
      {/* Trash */}
      <SideBarComponent Icon={DeleteOutlined} title='Trash' />
    </div>
  );
};

export default SideBar;
