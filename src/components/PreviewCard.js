import React from 'react';
import { Link } from 'react-router-dom';

const PreviewCard = ({ bg, blog }) => {
  const linkUrl = `/blogs/${blog.slug}`;
  const imgClass = `bg-blog-card${bg} h-72 rounded-t-lg bg-center bg-cover mb-9`;
  return (
    <div className="w-88 bg-white rounded-lg shadow-custom">
      <div className={imgClass}></div>
      <Link to={linkUrl}>
        <h3 className="text-xl font-semibold mb-2 px-6">
          {blog.title}
        </h3>
      </Link>
      <p className="text-bluegray-500 mb-12 px-6">{blog.subTitle}</p>
    </div>
  );
};

export default PreviewCard;
