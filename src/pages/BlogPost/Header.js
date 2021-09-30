import React from 'react';
import Nav from '../../components/Nav';

const Header = ({ title, subTitle }) => {
  return (
    <div className="bg-fixed h-screen text-white bg-hero-pattern2 bg-cover">
      <Nav />
      <div className="flex flex-col items-center pt-96">
        <h1 className="font-bold text-4xl pb-4">{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
