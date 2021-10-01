import { useEffect, useState } from 'react';

const useBlogFormError = (text, title, subTitle) => {
  const [textError, setTextError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [subTitleError, setSubTitleError] = useState(false);
  const [failedSubmit, setFailedSubmit] = useState(false);

  useEffect(() => {
    if (failedSubmit) {
      setTextError(text ? false : true);
      setTitleError(title ? false : true);
      setSubTitleError(subTitle ? false : true);
      setFailedSubmit(false);
    }
  }, [failedSubmit]);

  return { titleError, subTitleError, textError, setFailedSubmit };
};

export default useBlogFormError;
