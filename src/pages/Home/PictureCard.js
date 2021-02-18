import React from 'react';
import { Link } from 'react-router-dom';

const PictureCard = ({ bg, blog }) => {
  const linkUrl = `/blogs/${blog.slug}`;
  const imgClass = `w-1/4 h-96 bg-picture-card${bg} bg-center bg-cover text-white flex items-end transform transition-transform ease-linear hover:scale-105 hover:z-10`;
  return (
    <Link className={imgClass} to={linkUrl}>
      <div className="mb-4 mx-4">
        <h3 className="text-xl font-semibold">{blog.title}</h3>
      </div>
    </Link>
  );
};

export default PictureCard;
