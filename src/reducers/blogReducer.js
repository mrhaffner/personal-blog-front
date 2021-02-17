import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch(action.type) {
  case 'SET_BLOGS':
    return action.blogs.sort((a, b) => b.likes - a.likes)
  case 'NEW_BLOG':
    return [...state, action.blog]
  case 'REMOVE_BLOG':
    return state.filter(x => x.id !== action.id)
  case 'EDIT_BLOG':
    return state.map(x => x.id !== action.updatedBlog.id ? x : action.updatedBlog)
  case 'PUBLISH_BLOG':
    return state.map(x => x.id !== action.id ? x : { ...x, isPublished: action.publishStatus })
  default:
    return state
  }
}

export const getPublishedBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getPublishedPosts()
    dispatch ({
      type: 'SET_BLOGS',
      blogs
    })
  }
}

export const getUnpublishedBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getUnpublishedPosts()
    dispatch ({
      type: 'SET_BLOGS',
      blogs
    })
  }
}

export const getAllBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAllPosts()
    dispatch ({
      type: 'SET_BLOGS',
      blogs
    })
  }
}

//get one blog?

export const addBlog = blog => {
  return async dispatch => {
    const returnedBlog = await blogService.createPost(blog)
    dispatch ({
      type: 'NEW_BLOG',
      blog: returnedBlog
    })
  }
}

export const editBlog = (id, blog) => {
  return dispatch => {
    blogService.editPost(id, blog)
    dispatch({
      type: 'EDIT_BLOG',
      blog
    })
  }
}

export const publishBlog = (id, publishStatus) => {
  return dispatch => {
    blogService.publishPost(id, publishStatus)
    dispatch({
      type: 'PUBLISH_BLOG',
      publishStatus,
      id
    })
  }
}

export const removeBlog = blog => {
  return dispatch => {
    blogService.removePost(blog.id)
    dispatch({
      type: 'REMOVE_BLOG',
      id: blog.id
    })
  }
}

export default blogReducer