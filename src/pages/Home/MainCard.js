import React from 'react';
import WideCard from './WideCard';
import BlogCard from '../../components/BlogCard';
import PictureCard from './PictureCard';
import Author from './Author';
import Filter from './Filter';
import TextField from '../../components/TextField';
import { useSelector } from 'react-redux';

const MainCard = () => {
  const blogs = useSelector((state) => state.blogs);

  //update loading - probably use a skeleton or something
  if (!blogs.length) {
    return <div>Loading</div>;
  }

  return (
    <div className="mx-8 -mt-20 bg-white shadow-custom rounded-2xl flex flex-col items-center text-gray-700">
      <div className="w-278 flex flex-col items-center mt-12">
        <div className="mb-16 w-full">
          <Filter />
        </div>
        <WideCard />
        <div className="flex justify-between w-full my-32">
          <BlogCard bg={1} blog={blogs[1]} />
          <BlogCard bg={2} blog={blogs[2]} />
          <BlogCard bg={3} blog={blogs[3]} />
        </div>
      </div>
      <div className="flex w-full">
        <PictureCard bg={1} />
        <PictureCard bg={2} />
        <PictureCard bg={3} />
        <PictureCard bg={4} />
      </div>
      <div className="w-full bg-green-700 flex flex-col items-center mb-32 pb-44 pt-32">
        <h2 className="font-bold text-2xl text-white mb-20">
          About Your Author
        </h2>
        <Author />
      </div>
      <div className="flex justify-center w-278 mb-32">
        <div className="flex flex-col justify-center w-128">
          <h2 className="text-2xl font-bold mb-4">
            Stay Tuned to The Latest Articles
          </h2>
          <p className="text-bluegray-500">
            Subscribe to our newsletter to hear when the latest
            articles are posted and stay up to date.
          </p>
        </div>
        <div className="-mt-10">
          <TextField
            placeholderText="Email Address"
            btnText="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
