import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBlogs } from './reducers/blogReducer';
import MainCard from './MainCard';
import NavHeader from '../../components/NavHeader';

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <div className="bg-lightblue-50 h-full pb-16">
      <NavHeader />
      <MainCard />
    </div>
  );
};

export default Admin;
