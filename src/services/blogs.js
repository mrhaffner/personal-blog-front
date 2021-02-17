import axios from 'axios';
const baseUrl = 'http://localhost:3001/blogs';

const getPublishedPosts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getUnpublishedPosts = async () => {
  const response = await axios.get(`${baseUrl}/unpublished`);
  return response.data;
};

const getAllPosts = async () => {
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

const getPost = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createPost = async (newPost) => {
  const response = await axios.post(baseUrl, newPost);
  return response.data;
};

const editPost = async (id, editedPost) => {
  const response = await axios.put(
    `${baseUrl}/${id}/update`,
    editedPost,
  );
  return response.data;
};

const publishPost = async (id, publishStatus) => {
  const response = await axios.put(
    `${baseUrl}/${id}/publish`,
    publishStatus,
  );
  return response.data;
};

const removePost = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}/delete`);
  return response.data;
};

export default {
  getPublishedPosts,
  getUnpublishedPosts,
  getAllPosts,
  getPost,
  createPost,
  editPost,
  publishPost,
  removePost,
};
