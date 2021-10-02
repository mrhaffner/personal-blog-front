import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useStore } from 'react-redux';
import { addBlog } from '../../reducers/blogReducer';
import TitleInput from '../../components/TitleInput';
import 'react-toastify/dist/ReactToastify.css';
import InputError from '../../components/InputError';
import useBlogFormError from '../../hooks/useBlogFormError';
import FormButton from '../../components/FormButton';

const Form = ({ toast }) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [text, setText] = useState('## Use Markdown here!');
  const {
    titleError,
    subTitleError,
    textError,
    setFailedSubmit,
    titleErrorText,
    setTitleInUse,
  } = useBlogFormError(text, title, subTitle);

  let history = useHistory();
  const dispatch = useDispatch();
  const store = useStore();

  const changeFn = (stateUpdate) => (e) => {
    stateUpdate(e.target.value);
  };

  const handleSubmit = async () => {
    const blogObject = { title, subTitle, text };
    if (!title || !subTitle || !text) {
      if (!title) {
        setTitleInUse(false);
      }
      setFailedSubmit(true);
      return;
    }
    try {
      await dispatch(addBlog(blogObject));
    } catch (e) {
      setTitleInUse(true);
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
    <form className="self-start w-full space-y-7 my-16">
      <div>
        <TitleInput
          text="Title"
          placeholder="something amazing..."
          changeFn={changeFn(setTitle)}
        />
        {titleError && (
          <InputError text={titleErrorText} spacing="mt-1" />
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

      <div>
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
      <FormButton clickFn={handleSubmit} text="Save" color="blue" />
    </form>
  );
};

export default Form;
