import React from 'react';
import PreviewCard from './PreviewCard';
import { useSelector } from 'react-redux';

const Footer = () => {
  const blogs = useSelector((state) => state.blogs);

  //update loading - probably use a skeleton or something
  if (!blogs.length) {
    return <div>Loading</div>;
  }

  //needs to know if the current blog is one of the 3 recommended so it can not use that
  return (
    <div className="mx-5 flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-24">
        <h2 className="font-bold text-3xl mb-20">
          For Your Consideration
        </h2>
        <div className="flex justify-between w-full">
          <PreviewCard bg={1} blog={blogs[0]} />
          <PreviewCard bg={2} blog={blogs[1]} />
          <PreviewCard bg={3} blog={blogs[2]} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
