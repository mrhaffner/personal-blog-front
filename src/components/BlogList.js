import React from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between w-full mt-16'>
                <BlogCard bg={1} />
                <BlogCard bg={2} />
                <BlogCard bg={3} />
            </div>
            <div className='flex justify-between w-full mt-32'>
                <BlogCard bg={1} />
                <BlogCard bg={2} />
                <BlogCard bg={3} />
            </div>
            <div className='flex justify-between w-full my-32'>
                <BlogCard bg={1} />
                <BlogCard bg={2} />
                <BlogCard bg={3} />
            </div>
        </div>
    );
}

export default BlogList;