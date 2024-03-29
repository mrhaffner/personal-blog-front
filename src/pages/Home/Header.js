import React from 'react';
import Nav from '../../components/Nav';

const Header = () => {
  return (
    <div className="bg-fixed h-hero text-white bg-hero-pattern1 bg-cover">
      <Nav />
      <div className="flex justify-center pt-72">
        <h1 className="font-bold text-4xl">Welcome to The Blog</h1>
      </div>
    </div>
  );
};

export default Header;
