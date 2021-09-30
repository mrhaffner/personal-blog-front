import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useStore } from 'react-redux';
import { addBlog } from '../../reducers/blogReducer';
import TitleInput from '../../components/TitleInput';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ toast }) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [text, setText] = useState('## Use Markdown here!');

  //error message? 'Something went wrong'

  let history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

  const changeFn = (stateUpdate) => (e) => {
    stateUpdate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogObject = { title, subTitle, text };
    await dispatch(addBlog(blogObject));
    // const slug = store.getState().blogs[
    //   store.getState().blogs.length - 1
    // ].slug;
    const { slug } = store.getState().blogs.slice(-1)[0];
    toast.success('Post saved!');
    history.push(`/admin/${slug}`);
  };

  //should display date created!!!
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="self-start w-full space-y-7 my-16"
    >
      <TitleInput
        text="Title"
        placeholder="something amazing..."
        changeFn={changeFn(setTitle)}
      />
      <TitleInput
        text="Sub Title"
        placeholder="not too long now..."
        changeFn={changeFn(setSubTitle)}
      />
      <div className="space-y-3">
        <label htmlFor="Article Body">Article Body</label>
        <MDEditor value={text} onChange={setText} />
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 rounded-full text-white font-bold text-l tracking-wide focus:outline-none"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
