import React, { useEffect, useState } from 'react';
import MainCard from './MainCard';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPost = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  });

  const blogs = useSelector((state) => state.blogs);
  const { slug } = useParams();
  const blog =
    blogs.length > 0
      ? blogs.find((blog) => slug === blog.slug)
      : null;

  //update loading - probably use a skeleton or something
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="bg-lightblue-50 h-full pb-16">
      <Header title={blog.title} subTitle={blog.subTitle} />
      <MainCard article={blog.text} />
      <Footer />
    </div>
  );
};

export default BlogPost;
