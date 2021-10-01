import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../reducers/loggedUserReducer';

const NavHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    dispatch(removeUser());
    history.push('/');
  };

  return (
    <div className="bg-green-700 h-screen text-white">
      <nav className="flex justify-center">
        <div className="flex justify-between pt-10 w-278 font-bold text-l tracking-wide">
          <Link
            to="/admin/new"
            className="hover:text-bluegray-200 flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="pl-1">New Post</span>
          </Link>
          <div className="space-x-6">
            <Link to="/admin" className="hover:text-bluegray-200">
              Admin
            </Link>
            <Link to="/" className="hover:text-bluegray-200">
              Home
            </Link>
            <p
              className="inline cursor-pointer hover:text-bluegray-200"
              onClick={() => signOut()}
            >
              Sign Out
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
