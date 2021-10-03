import React from 'react';
import { useSelector } from 'react-redux';
import BlogSuggest from '../../components/BlogSuggest';

const Footer = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="mx-5 flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-24">
        <h2 className="font-bold text-3xl mb-20">
          For Your Consideration
        </h2>
        <BlogSuggest blogs={blogs} />
      </div>
    </div>
  );
};

export default Footer;
