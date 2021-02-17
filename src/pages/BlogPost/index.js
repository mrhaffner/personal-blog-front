import React from 'react';
import MainCard from './MainCard';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPost = () => {
  const blogs = useSelector((state) => state.blogs);
  const { slug } = useParams();
  const blog =
    blogs.length > 0
      ? blogs.find((blog) => slug === blog.slug)
      : null;

  //update loading - probably use a skeleton or something
  if (!blog) {
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
