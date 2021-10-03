import React from 'react';
import { Link } from 'react-router-dom';

const PictureCard = ({ bg, blog }) => {
  const linkUrl = `/blogs/${blog.slug}`;
  const imgClass = `w-full h-full bg-picture-card${bg} card-zoom-image`;

  return (
    <div className=" w-1/4 h-96 card-zoom select-none">
      <Link className={imgClass} to={linkUrl} />
      <h3 className="text-xl font-semibold text-white card-zoom-text cursor-pointer">
        {blog.title}
      </h3>
    </div>
  );
};

export default PictureCard;
