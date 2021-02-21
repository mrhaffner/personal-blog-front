import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getPublishedPosts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getUnpublishedPosts = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/unpublished`, config);
  return response.data;
};

const getAllPosts = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/all`, config);
  return response.data;
};

// const getPost = async (id) => {
//   const response = await axios.get(`${baseUrl}/${id}`);
//   return response.data;
// };

const createPost = async (newPost) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newPost, config);
  return response.data;
};

const editPost = async (id, editedPost) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    `${baseUrl}/${id}/update`,
    editedPost,
    config,
  );
  return response.data;
};

const publishPost = async (id, publishStatus) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    `${baseUrl}/${id}/publish`,
    publishStatus,
    config,
  );
  return response.data;
};

const removePost = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(
    `${baseUrl}/${id}/delete`,
    config,
  );
  return response.data;
};

export default {
  setToken,
  getPublishedPosts,
  getUnpublishedPosts,
  getAllPosts,
  createPost,
  editPost,
  publishPost,
  removePost,
};
