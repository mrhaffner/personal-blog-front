import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import blogReducer from './blogReducer';
import loggedUserReducer from './loggedUserReducer';

const reducer = combineReducers({
  blogs: blogReducer,
  loggedUser: loggedUserReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
