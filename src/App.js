import React from 'react'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/blog-post'>
          <BlogPost />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
