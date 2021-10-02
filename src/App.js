import React, { useEffect } from 'react';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import LogIn from './pages/LogIn';
import { setUser } from './reducers/loggedUserReducer';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      'loggedBlogappUser',
    );
    if (loggedUserJSON) {
      const newUser = JSON.parse(loggedUserJSON);
      dispatch(setUser(newUser));
    }
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path="/admin/new">
          {loggedUser ? (
            <NewPost toast={toast} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/admin/:slug">
          {loggedUser ? (
            <EditPost toast={toast} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/blogs/:slug">
          <BlogPost />
        </Route>
        <Route path="/admin">
          {loggedUser ? <Admin /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {loggedUser ? <Redirect to="/admin" /> : <LogIn />}
        </Route>
        <Route path="/">
          <Home toast={toast} />
        </Route>
      </Switch>
      <ToastContainer position="bottom-left" />
    </>
  );
};

export default App;
