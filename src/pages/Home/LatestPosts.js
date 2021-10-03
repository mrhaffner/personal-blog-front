import React from 'react';
import WideCard from './WideCard';
import BlogCard from '../../components/BlogCard';
import PictureCard from './PictureCard';
import Skeleton from 'react-loading-skeleton';

const LatestPosts = ({ blogs }) => {
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <div className="w-278 ">
        {blogs.length ? (
          <WideCard blog={blogs[0]} />
        ) : (
          <Skeleton height="20rem" />
        )}
        <div className="flex justify-between w-full my-32">
          {blogs.length ? (
            <BlogCard bg={1} blog={blogs[1]} />
          ) : (
            <Skeleton height="18rem" width="22rem" />
          )}
          {blogs.length ? (
            <BlogCard bg={2} blog={blogs[2]} />
          ) : (
            <Skeleton height="18rem" width="22rem" />
          )}
          {blogs.length ? (
            <BlogCard bg={3} blog={blogs[3]} />
          ) : (
            <Skeleton height="18rem" width="22rem" />
          )}
        </div>
      </div>
      <div className="flex w-full">
        {blogs.length ? (
          <PictureCard bg={1} blog={blogs[4]} />
        ) : (
          <span className="w-1/4">
            <Skeleton height="24rem" />
          </span>
        )}
        {blogs.length ? (
          <PictureCard bg={2} blog={blogs[5]} />
        ) : (
          <span className="w-1/4">
            <Skeleton height="24rem" />
          </span>
        )}
        {blogs.length ? (
          <PictureCard bg={3} blog={blogs[6]} />
        ) : (
          <span className="w-1/4">
            <Skeleton height="24rem" />
          </span>
        )}
        {blogs.length ? (
          <PictureCard bg={4} blog={blogs[7]} />
        ) : (
          <span className="w-1/4">
            <Skeleton height="24rem" />
          </span>
        )}
      </div>
    </div>
  );
};

export default LatestPosts;
