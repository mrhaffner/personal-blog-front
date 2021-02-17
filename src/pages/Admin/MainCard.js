import React from 'react';
import BlogList from '../../components/BlogList';
import Filter from './Filter';

const MainCard = () => {
  return (
    <div className="mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-12">
        <div className="w-full">
          <Filter />
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default MainCard;
