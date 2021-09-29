import React from 'react';
import Nav from '../../components/Nav';
import bgImg from '../../img/hero-pattern.jpg';

const Header = ({ title, subTitle }) => {
  return (
    <div
      className="bg-fixed h-screen text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImg}) center center`,
      }}
    >
      <Nav />
      <div className="flex flex-col items-center pt-96">
        <h1 className="font-bold text-4xl pb-4">{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
