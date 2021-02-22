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
          <Link to="/admin/new">+ New Post (Add Link and Icon)</Link>
          <div className="space-x-6">
            <Link to="/admin">Admin</Link>
            <Link to="/">Home</Link>
            <p
              className="inline cursor-pointer"
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
