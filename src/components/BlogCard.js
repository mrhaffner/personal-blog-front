import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ bg, blog, edit }) => {
  const imgClass = `bg-blog-card${bg} h-72 rounded-lg bg-center bg-cover mb-9 shadow-custom`;
  const linkUrl = edit
    ? `/admin/${blog.slug}`
    : `/blogs/${blog.slug}`;
  return (
    <div className="w-88">
      <div className={imgClass}></div>
      <h3 className="text-xl font-semibold">
        <Link to={linkUrl}>{blog.title}</Link>
      </h3>
      <p className="text-bluegray-500">{blog.subTitle}</p>
    </div>
  );
};

export default BlogCard;
