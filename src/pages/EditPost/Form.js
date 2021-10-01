import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch } from 'react-redux';
import {
  editBlog,
  publishBlog,
  removeBlog,
} from '../../reducers/blogReducer';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ blog, toast }) => {
  const [title, setTitle] = useState(blog.title);
  const [subTitle, setSubTitle] = useState(blog.subTitle);
  const [text, setText] = useState(blog.text);

  let history = useHistory();

  const dispatch = useDispatch();

  // change slug and redirect if title is different!
  // add some sort of indication that it was updated
  const handleEdit = (e) => {
    e.preventDefault();
    const blogObject = { ...blog, title, subTitle, text };
    dispatch(editBlog(blog._id, blogObject));
    toast.success('Post updated!');
  };

  // add a warning
  const handlePubStatus = () => {
    const publishObject = { isPublished: !blog.isPublished };
    dispatch(publishBlog(blog._id, publishObject));
    toast.success(
      `Post ${blog.isPublished ? 'Unpublished' : 'Published'}`,
    );
  };

  // add a warning
  const handleDelete = () => {
    dispatch(removeBlog(blog._id));
    toast.success('Post deleted...');
    history.push('/admin');
  };

  //should display date created!!!
  return (
    <form
      onSubmit={(e) => handleEdit(e)}
      className="self-start w-full space-y-7 my-16"
    >
      <div className="space-y-1">
        <label
          htmlFor="Title"
          className="font-semibold text-gray-600 tracking-wide"
        >
          Title
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border-b-2 focus:border-gray-400 pr-12 block focus:outline-none w-128"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="Sub Title"
          className="font-semibold text-gray-600 tracking-wide"
        >
          Sub Title
        </label>
        <input
          type="text"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
          className="border-b-2 focus:border-gray-400 pr-12 block focus:outline-none w-128"
        />
      </div>
      <div className="space-y-3">
        <label
          htmlFor="Article Body"
          className="font-semibold text-gray-600 tracking-wide"
        >
          Article Body
        </label>
        <MDEditor value={text} onChange={setText} />
      </div>
      <div className="flex justify-between">
        <div className="space-x-3">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full text-white font-bold text-l tracking-wide focus:outline-none"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => handlePubStatus()}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 rounded-full text-white font-bold text-l tracking-wide focus:outline-none"
          >
            {blog.isPublished ? 'Unpublish' : 'Publish'}
          </button>
        </div>
        <button
          type="button"
          onClick={() => handleDelete()}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full text-white font-bold text-l tracking-wide focus:outline-none"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default Form;
