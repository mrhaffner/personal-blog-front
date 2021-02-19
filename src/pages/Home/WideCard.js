import React from 'react';
import { Link } from 'react-router-dom';

const WideCard = ({ blog }) => {
  const linkUrl = `/blogs/${blog.slug}`;
  return (
    <div className="w-full bg-w-img-card bg-center bg-cover h-80 text-white rounded-lg flex justify-center items-center shadow-custom">
      <div className="w-1/3 text-center">
        <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
        <p className="text-bluegray-300 mb-6">{blog.subTitle}</p>
        <Link to={linkUrl}>
          <button className="px-5 py-2 bg-green-500 rounded-full text-white font-bold text-l tracking-wide uppercase">
            Read Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WideCard;
