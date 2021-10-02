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
import useBlogFormError from '../../hooks/useBlogFormError';
import InputError from '../../components/InputError';
import ChangePostAlert from '../../components/ChangePostAlert';
import useToggle from '../../hooks/useToggle';
import FormButton from '../../components/FormButton';

const Form = ({ blog, toast }) => {
  const [title, setTitle] = useState(blog.title);
  const [subTitle, setSubTitle] = useState(blog.subTitle);
  const [text, setText] = useState(blog.text);
  const {
    titleError,
    subTitleError,
    textError,
    setFailedSubmit,
    titleErrorText,
    setTitleInUse,
    setReset,
  } = useBlogFormError(text, title, subTitle);
  let history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = () => async () => {
    setReset(false);
    const blogObject = { ...blog, title, subTitle, text };
    try {
      if (!title || !subTitle || !text) {
        if (!title) {
          setTitleInUse(false);
        }
        throw new Error('input field missing');
      }
      await dispatch(editBlog(blog._id, blogObject));
    } catch (e) {
      if (e.message === 'Request failed with status code 400') {
        setTitleInUse(true);
      }
      setFailedSubmit(true);
      return;
    }

    toast.success('Post updated!');
    setReset(true);
    toggleAlert();
  };

  const handlePubStatus = () => () => {
    const publishObject = { isPublished: !blog.isPublished };
    dispatch(publishBlog(blog._id, publishObject));
    toast.success(
      `Post ${blog.isPublished ? 'Unpublished' : 'Published'}`,
    );
    toggleAlert();
  };

  const handleDelete = () => () => {
    dispatch(removeBlog(blog._id));
    toast.success('Post deleted...');
    history.push('/admin');
  };

  const [alertText, setAlertText] = useState('');
  const [showAlert, toggleAlert] = useToggle();
  const [submitFn, setSubmitFn] = useState(null);

  const toggleFn = (fn, text) => () => {
    toggleAlert();
    setSubmitFn(fn);
    setAlertText(text);
  };
  return (
    <>
      <form className="self-start w-full space-y-7 my-16">
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
          {titleError && (
            <InputError text={titleErrorText} spacing="mt-1" />
          )}
        </div>
        <div className="space-y-1">
          <label
            htmlFor="Subtitle"
            className="font-semibold text-gray-600 tracking-wide"
          >
            Subtitle
          </label>
          <input
            type="text"
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
            className="border-b-2 focus:border-gray-400 pr-12 block focus:outline-none w-128"
          />
          {subTitleError && (
            <InputError
              text="Please enter a subtitle"
              spacing="mt-1"
            />
          )}
        </div>
        <div>
          <label
            htmlFor="Article Body"
            className="font-semibold text-gray-600 tracking-wide"
          >
            Article Body
          </label>
          <MDEditor
            value={text}
            onChange={setText}
            className="mt-3"
          />
          {textError && (
            <InputError
              text="Please enter some text"
              spacing="mt-1"
            />
          )}
        </div>
        <div className="flex justify-between">
          <div className="space-x-3">
            <FormButton
              clickFn={toggleFn(handleEdit, 'update')}
              text="Update"
              color="blue"
            />
            <FormButton
              clickFn={toggleFn(
                handlePubStatus,
                blog.isPublished ? 'unpublish' : 'publish',
              )}
              text={blog.isPublished ? 'Unpublish' : 'Publish'}
              color="green"
            />
          </div>
          <FormButton
            clickFn={toggleFn(handleDelete, 'delete')}
            text="Delete"
            color="red"
          />
        </div>
      </form>
      {showAlert && (
        <ChangePostAlert
          alertText={alertText}
          toggleAlert={toggleAlert}
          submitFn={submitFn}
        />
      )}
    </>
  );
};

export default Form;
