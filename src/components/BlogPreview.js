import React from 'react'

const BlogPreview = ({blog}) => {
    return (
        <div className='text-white px-5 py-5 w-1/3'>
            <div className='text-xs font-bold tracking-wide'>{blog.date}</div>
            <div className='text-xl font-bold pb-5'>{blog.title}</div>
            <div>{blog.text}</div>
        </div>
    );
}

export default BlogPreview;