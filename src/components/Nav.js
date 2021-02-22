import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../reducers/loggedUserReducer';

//move login, make it conditionally appear
//make admin route conditional
const Nav = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const history = useHistory();

  const signOut = () => {
    dispatch(removeUser());
    history.push('/');
  };

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between pt-10 w-278 font-bold text-l tracking-wide">
        <Link to="/">Home</Link>
        <div className="space-x-6">
          {loggedUser ? (
            <p
              className="inline cursor-pointer"
              onClick={() => signOut()}
            >
              Sign Out
            </p>
          ) : (
            <Link to="/login">Sign In (temp)</Link>
          )}
          {loggedUser && <Link to="/admin">Admin (temp)</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
