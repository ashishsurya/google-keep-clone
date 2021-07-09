import React from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <LeftHeader />
      <RightHeader />
    </header>
  );
};

Header.propTypes = {};
export default Header;
