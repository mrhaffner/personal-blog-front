import React, { useState, useEffect, useRef } from 'react';
import loginService from '../../services/login';
import { setUser } from '../../reducers/loggedUserReducer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputError from '../../components/InputError';
import useLoginError from '../../hooks/useLoginError';

const MainCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    userError,
    passwordError,
    setFailedSubmit,
    userErrorText,
    setBadLogin,
  } = useLoginError(username, password);

  const dispatch = useDispatch();
  const history = useHistory();

  const userInputRef = useRef(null);

  useEffect(() => {
    userInputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !username) {
      if (!username) {
        setBadLogin(false);
      }
      setFailedSubmit(true);
      return;
    }
    try {
      const newUser = await loginService.login({
        username,
        password,
      });
      setUsername('');
      setPassword('');
      window.localStorage.setItem(
        'loggedBlogappUser',
        JSON.stringify(newUser),
      );
      dispatch(setUser(newUser));
      history.push('/admin');
    } catch (e) {
      setBadLogin(true);
      setFailedSubmit(true);
      return;
    }
  };

  return (
    <div className="w-80 h-112 bg-white shadow-custom rounded-2xl text-gray-700 overflow-hidden">
      <div className="bg-green-700 pt-20 pb-10 flex justify-center text-white font-bold text-2xl">
        <h1>Admin Login</h1>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-10 my-16"
        >
          <div className="">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border-b-2 pr-20 block focus:outline-none focus:border-gray-400"
              ref={userInputRef}
            />
            {userError && (
              <InputError text={userErrorText} spacing="mt-1" />
            )}
          </div>
          <div className="">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-b-2 pr-20 block focus:outline-none focus:border-gray-400"
            />
            {passwordError && (
              <InputError
                text="Please enter a password"
                spacing="mt-1"
              />
            )}
          </div>
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-5 py-2 border-2 border-gray-400 hover:border-gray-500 rounded-full text-gray-400 hover:text-gray-500 font-bold text-l tracking-wide uppercase focus:outline-none active:bg-gray-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainCard;
