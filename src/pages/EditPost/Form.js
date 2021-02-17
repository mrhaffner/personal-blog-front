import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { useDispatch } from 'react-redux'
import { editBlog, removeBlog } from '../../reducers/blogReducer'

const Form = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [text, setText] = useState('## Use Markdown here!')
    const dispatch = useDispatch()
    //useEffect useParams to get slug and GET the blog - set to 'activeBlog' in blogReducer???

    const handleEdit = e => {
        e.preventDefault()
        const blogObject = { ...blog, title, subTitle, text }
        console.log(blogObject)
        dispatch(editBlog(id, blogObject))
    }

    const handlePubStatus = () => {

    }

    const handleDelete = e => {
        e.preventDefault()
        dispatch(removeBlog(id))
    }

    //should display date created!!!
    return (
        <form onSubmit={(e) => handleEdit(e)} className='self-start w-full space-y-7 my-16'>
            <div className='space-y-1'>
                <label htmlFor="Title">Title</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='something amazing...' className='border-b-2 pr-12 block ' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="Sub Title">Sub Title</label>
                <input type='text' onChange={(e) => setSubTitle(e.target.value)} placeholder='not too long now...' className='border-b-2 pr-12 block' />
            </div>
            <div className='space-y-3'>
                <label htmlFor="Article Body">Article Body</label>
                <MDEditor
                    value={text}
                    onChange={setText}

                />
            </div>
            <div className='flex space-between'>
                <div>
                    <button type='submit' className='px-5 py-2 bg-blue-500 rounded-full tracking-wide uppercase text-white'>Update</button>
                    <button type='button' onClick={handlePubStatus()} className='px-5 py-2 bg-amber-500 rounded-full tracking-wide uppercase text-white'>Pub/Unpub</button>
                </div>
                <button type='button' onClick={handleDelete()} className='px-5 py-2 bg-red-500 rounded-full tracking-wide uppercase text-white'>Delete</button>
            </div>
        </form>
    );
}

export default Form