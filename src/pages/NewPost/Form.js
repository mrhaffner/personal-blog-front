import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useStore } from 'react-redux';
import { addBlog } from '../../reducers/blogReducer';
import TitleInput from '../../components/TitleInput';
import 'react-toastify/dist/ReactToastify.css';
import InputError from '../../components/InputError';
import useBlogFormError from '../../hooks/useBlogFormError';

const Form = ({ toast }) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [text, setText] = useState('## Use Markdown here!');
  const {
    titleError,
    subTitleError,
    textError,
    setFailedSubmit,
  } = useBlogFormError(text, title, subTitle);

  let history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

  const changeFn = (stateUpdate) => (e) => {
    stateUpdate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogObject = { title, subTitle, text };
    try {
      await dispatch(addBlog(blogObject));
    } catch (e) {
      setFailedSubmit(true);
      return;
    }
    // const slug = store.getState().blogs[
    //   store.getState().blogs.length - 1
    // ].slug;
    const { slug } = store.getState().blogs.slice(-1)[0];
    toast.success('Post saved!');
    history.push(`/admin/${slug}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="self-start w-full space-y-7 my-16"
    >
      <div>
        <TitleInput
          text="Title"
          placeholder="something amazing..."
          changeFn={changeFn(setTitle)}
        />
        {titleError && (
          <InputError text="Please enter a title" spacing="mt-1" />
        )}
      </div>
      <div>
        <TitleInput
          text="Subtitle"
          placeholder="not too long now..."
          changeFn={changeFn(setSubTitle)}
        />
        {subTitleError && (
          <InputError text="Please enter a subtitle" spacing="mt-1" />
        )}
      </div>

      <div className="">
        <label
          htmlFor="Article Body"
          className="font-semibold text-gray-600 tracking-wide"
        >
          Article Body
        </label>
        <MDEditor value={text} onChange={setText} className="mt-3" />
        {textError && (
          <InputError text="Please enter some text" spacing="mt-1" />
        )}
      </div>

      <button
        type="submit"
        className=" px-5 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-full text-white font-bold text-l tracking-wide focus:outline-none"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
