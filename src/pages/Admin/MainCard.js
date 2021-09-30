import React, { useState, useRef } from 'react';
import BlogList from '../../components/BlogList';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const MainCard = () => {
  const [filter, setFilter] = useState('All');
  const [textFilter, setTextFilter] = useState('');
  const blogs = useSelector((state) => state.blogs);

  let filteredBlogs =
    filter === 'Published'
      ? blogs.filter((blog) => blog.isPublished)
      : filter === 'Unpublished'
      ? blogs.filter((blog) => !blog.isPublished)
      : blogs;

  const filterRef = useRef();

  return (
    <div className="mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-12">
        <div className="w-full" ref={filterRef}>
          <Filter
            setFilter={setFilter}
            filter={filter}
            setTextFilter={setTextFilter}
          />
        </div>
        <BlogList
          blogs={filteredBlogs}
          edit={true}
          textFilter={textFilter}
          heightRef={filterRef}
        />
      </div>
    </div>
  );
};

export default MainCard;
