import React from 'react';
import MainCard from './MainCard';
import Header from './Header';

const Home = ({ toast }) => {
  return (
    <div className="bg-lightblue-50 h-full pb-16">
      <Header />
      <MainCard toast={toast} />
    </div>
  );
};

export default Home;
