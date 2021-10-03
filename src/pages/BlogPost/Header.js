import React from 'react';
import Nav from '../../components/Nav';
import Skeleton from 'react-loading-skeleton';

const num =
  Math.floor(Math.random() * (Math.floor(6) - Math.ceil(2) + 1)) +
  Math.ceil(2);

const heroStyle = `bg-fixed h-screen text-white bg-hero-pattern${num} bg-cover`;

const Header = ({ title, subTitle }) => {
  return (
    <div className={heroStyle}>
      <Nav />
      <div className="flex flex-col items-center pt-96 space-y-4">
        {title ? (
          <h1 className="font-bold text-4xl">{title}</h1>
        ) : (
          <Skeleton height={30} width={300} />
        )}
        {subTitle ? (
          <p>{subTitle}</p>
        ) : (
          <Skeleton height={20} width={300} />
        )}
      </div>
    </div>
  );
};

export default Header;
