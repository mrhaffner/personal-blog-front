import { useState, useEffect } from 'react';

const noUsername = 'Please enter a username';
const badCredentials = 'Invalid username or password';

const useLoginError = (username, password) => {
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [failedSubmit, setFailedSubmit] = useState(false);
  const [userErrorText, setUserErrorText] = useState(noUsername);
  const [badLogin, setBadLogin] = useState(false);

  useEffect(() => {
    if (failedSubmit) {
      setUserErrorText(badLogin ? badCredentials : noUsername);
      setUserError(username && !badLogin ? false : true);
      setPasswordError(password ? false : true);
      setFailedSubmit(false);
    }
  }, [failedSubmit]);

  return {
    userError,
    passwordError,
    setFailedSubmit,
    userErrorText,
    setBadLogin,
  };
};

export default useLoginError;
