import React from 'react';
import Form from './Form';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainCard = () => {
  const blogs = useSelector((state) => state.blogs);
  const { slug } = useParams();
  const blog =
    blogs.length > 0
      ? blogs.find((blog) => slug === blog.slug)
      : null;

  //update loading - probably use a skeleton or something
  if (!blog) {
    return <div>Loading</div>;
  }
  return (
    <div className="mx-8 mt-admin bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-16">
        <h1 className="font-bold text-4xl">Update Your Post</h1>
        <div className="w-184">
          <Form blog={blog} />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
