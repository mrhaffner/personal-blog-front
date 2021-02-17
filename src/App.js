import React, { useEffect } from 'react';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import NewPost from './pages/NewPost';
import { getAllBlogs } from './reducers/blogReducer';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  //change this to get published blogs once auth is set up
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/blogs/:slug">
          <BlogPost />
        </Route>
        <Route path="/admin/new">
          <NewPost />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
