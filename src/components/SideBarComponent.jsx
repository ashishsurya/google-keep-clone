import React from 'react';
import './SideBarComponent.css';
const SideBarComponent = ({ Icon, title, active }) => {
  return (
    <div className={`sidebarcomponent  ${active ? 'bg-yes' : null}`}>
      <Icon className='sbc__icon' />
      <p className='sbc__title'>{title}</p>
    </div>
  );
};

export default SideBarComponent;
