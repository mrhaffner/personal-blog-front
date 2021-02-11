import React from 'react'

const BlogPreview = ({blog}) => {
    return (
        // <div className='text-white px-5 py-5 max-w-xl'>
        //     <div className='text-xs font-bold tracking-wide'>{blog.date}</div>
        //     <div className='text-xl font-bold pb-5'>{blog.title}</div>
        //     <div>{blog.text}</div>
        // </div>
        <div className='text-gray-700 bg-white px-5 py-5 mx-8 my-8 max-w-xl rounded-lg shadow-2xl'>
            <p className='text-gray-500 text-xs font-bold tracking-wide'>{blog.date}</p>
            <p className='text-gray-800 text-l font-semibold pb-5'>{blog.title}</p>
            <p>{blog.text}</p>
            <div className='flex justify-end mt-3'>
                <p className='text-gray-500 tracking-wide uppercase font-semibold text-sm'>Read More</p>
            </div>
        </div>
    );
}

export default BlogPreview;