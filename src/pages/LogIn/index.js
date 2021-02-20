import React from 'react';
import { Link } from 'react-router-dom';
import MainCard from './MainCard';

const LogIn = () => {
  return (
    <div className="bg-lightblue-50 min-h-screen">
      <nav className="flex justify-center">
        <div className="flex justify-end pt-10 w-278 font-bold text-l tracking-wide">
          <Link to="/">Return</Link>
        </div>
      </nav>
      <div className="flex justify-center mt-32">
        <MainCard />
      </div>
    </div>
  );
};

export default LogIn;
