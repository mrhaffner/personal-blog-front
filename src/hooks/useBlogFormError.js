import { useEffect, useState } from 'react';
const noTitle = 'Please enter a title';
const badTitle = 'Title already in use';

const useBlogFormError = (text, title, subTitle) => {
  const [textError, setTextError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [subTitleError, setSubTitleError] = useState(false);
  const [failedSubmit, setFailedSubmit] = useState(false);
  const [titleErrorText, setTitleErrorText] = useState(noTitle);
  const [titleInUse, setTitleInUse] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (failedSubmit) {
      setTitleErrorText(titleInUse ? badTitle : noTitle);
      setTextError(text ? false : true);
      setTitleError(title && !titleInUse ? false : true);
      setSubTitleError(subTitle ? false : true);
      setFailedSubmit(false);
    }
  }, [failedSubmit]);

  useEffect(() => {
    if (reset) {
      setTextError(false);
      setTitleError(false);
      setSubTitleError(false);
    }
  }, [reset]);

  return {
    titleError,
    subTitleError,
    textError,
    setFailedSubmit,
    titleErrorText,
    setTitleInUse,
    setReset,
  };
};

export default useBlogFormError;
