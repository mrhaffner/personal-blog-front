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
          <Link to="/admin/new" className="hover:text-bluegray-200">
            + New Post (Add Link and Icon)
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
