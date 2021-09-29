import React from 'react';
import Nav from '../../components/Nav';
import bgImg from '../../img/hero-pattern.jpg';

const Header = () => {
  return (
    <div
      className="bg-fixed h-hero text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg}) center center`,
      }}
    >
      <Nav />
      <div className="flex justify-center pt-72">
        <h1 className="font-bold text-4xl">Welcome to The Blog</h1>
      </div>
    </div>
  );
};

export default Header;
