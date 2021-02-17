import axios from 'axios'
const baseUrl = 'http://localhost:3001/blogs'

const getAllPosts = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createPost = async newPost => {
    const response = await axios.post(baseUrl, newPost)
        return response.data
}

const editPost = async (id, editedPost) => {
    const response = await axios.put(`${baseUrl}/${id}`, editedPost)
    return response.data
}

const removePost = async id => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  }

export default { getAllPosts, createPost, editPost, removePost }