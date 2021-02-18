import blogService from '../services/blogs';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return action.blogs.sort((a, b) => b.likes - a.likes);
    case 'NEW_BLOG':
      return [...state, action.blog];
    case 'REMOVE_BLOG':
      return state.filter((x) => x._id !== action.id);
    case 'EDIT_BLOG':
      return state.map((x) =>
        x._id !== action.updatedBlog._id ? x : action.updatedBlog,
      );
    case 'PUBLISH_BLOG':
      return state.map((x) =>
        x._id !== action.id
          ? x
          : { ...x, isPublished: action.publishStatus },
      );
    default:
      return state;
  }
};

export const getPublishedBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getPublishedPosts();
    dispatch({
      type: 'SET_BLOGS',
      blogs,
    });
  };
};

export const getUnpublishedBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getUnpublishedPosts();
    dispatch({
      type: 'SET_BLOGS',
      blogs,
    });
  };
};

export const getAllBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAllPosts();
    console.log(blogs);
    dispatch({
      type: 'SET_BLOGS',
      blogs,
    });
  };
};

//get one blog?????

export const addBlog = (blog) => {
  return async (dispatch) => {
    const returnedBlog = await blogService.createPost(blog);
    dispatch({
      type: 'NEW_BLOG',
      blog: returnedBlog,
    });
  };
};

export const editBlog = (id, blog) => {
  return async (dispatch) => {
    console.log(id, blog);
    const updatedBlog = await blogService.editPost(id, blog);
    console.log('hi');
    dispatch({
      type: 'EDIT_BLOG',
      updatedBlog,
    });
  };
};

export const publishBlog = (id, publishStatus) => {
  return (dispatch) => {
    blogService.publishPost(id, publishStatus);
    dispatch({
      type: 'PUBLISH_BLOG',
      publishStatus,
      id,
    });
  };
};

export const removeBlog = (id) => {
  return (dispatch) => {
    blogService.removePost(id);
    dispatch({
      type: 'REMOVE_BLOG',
      id,
    });
  };
};

export default blogReducer;
