import React from 'react';
import BlogList from '../../components/BlogList';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const MainCard = () => {
  const blogs = useSelector((state) => state.blogs);

  //update loading - probably use a skeleton or something
  if (!blogs.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-12">
        <div className="w-full">
          <Filter />
        </div>
        <BlogList blogs={blogs} edit={true} />
      </div>
    </div>
  );
};

export default MainCard;
