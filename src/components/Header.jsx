import React from 'react';
import './Header.css';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

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
