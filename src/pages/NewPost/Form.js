import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useStore } from 'react-redux';
import { addBlog } from '../../reducers/blogReducer';

const Form = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [text, setText] = useState('## Use Markdown here!');

  let history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogObject = { title, subTitle, text };
    await dispatch(addBlog(blogObject));
    // const slug = store.getState().blogs[
    //   store.getState().blogs.length - 1
    // ].slug;
    const { slug } = store.getState().blogs.slice(-1)[0];
    history.push(`/admin/${slug}`);
  };

  //should display date created!!!
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="self-start w-full space-y-7 my-16"
    >
      <div className="space-y-1">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="something amazing..."
          className="border-b-2 pr-12 block "
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="Sub Title">Sub Title</label>
        <input
          type="text"
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder="not too long now..."
          className="border-b-2 pr-12 block"
        />
      </div>
      <div className="space-y-3">
        <label htmlFor="Article Body">Article Body</label>
        <MDEditor value={text} onChange={setText} />
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 rounded-full text-white font-bold text-l tracking-wide"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
