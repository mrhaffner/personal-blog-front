import React from 'react';
import Nav from '../../components/Nav';

const heroStyle = `bg-fixed h-screen text-white bg-hero-pattern${
  Math.floor(Math.random() * (Math.floor(6) - Math.ceil(2) + 1)) +
  Math.ceil(2)
} bg-cover`;

const Header = ({ title, subTitle }) => {
  return (
    <div className={heroStyle}>
      <Nav />
      <div className="flex flex-col items-center pt-96">
        <h1 className="font-bold text-4xl pb-4">{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Header;
