import React from 'react'

const BlogCard = () => (
    // remove mt
    <div className='w-88 mt-20'>  
        <div className='h-56 bg-blog-card1 rounded-l bg-center bg-cover mb-3'></div>
        <h3 className='text-xl font-semibold mb-4'>Title of muh blog post</h3>
        <p className='text-bluegray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
    </div>
);

export default BlogCard;