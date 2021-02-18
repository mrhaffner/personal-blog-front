import React from 'react';
import WideCard from './WideCard';
import BlogCard from '../../components/BlogCard';
import PictureCard from './PictureCard';

const LatestPosts = ({ blogs }) => {
  //update loading - probably use a skeleton or something
  if (!blogs.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-278 ">
        <WideCard blog={blogs[0]} />
        <div className="flex justify-between w-full my-32">
          <BlogCard bg={1} blog={blogs[1]} />
          <BlogCard bg={2} blog={blogs[2]} />
          <BlogCard bg={3} blog={blogs[3]} />
        </div>
      </div>
      <div className="flex w-full">
        <PictureCard bg={1} blog={blogs[4]} />
        <PictureCard bg={2} blog={blogs[5]} />
        <PictureCard bg={3} blog={blogs[6]} />
        <PictureCard bg={4} blog={blogs[7]} />
      </div>
    </div>
  );
};

export default LatestPosts;
