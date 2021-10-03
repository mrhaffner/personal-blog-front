import React, { useEffect } from 'react';
import MainCard from './MainCard';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPublishedBlogs } from '../../reducers/blogReducer';

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublishedBlogs());
  }, []);

  const blogs = useSelector((state) => state.blogs);
  const { slug } = useParams();
  const blog =
    blogs.length > 0
      ? blogs.find((blog) => slug === blog.slug)
      : null;

  return (
    <div className="bg-lightblue-50 h-full pb-16">
      <Header title={blog?.title} subTitle={blog?.subTitle} />
      <MainCard article={blog?.text} />
      <Footer />
    </div>
  );
};

export default BlogPost;
