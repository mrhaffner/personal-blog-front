import React from 'react'

const BlogCard = ({bg}) => {
    const imgClass = `bg-blog-card${bg} h-72 rounded-lg bg-center bg-cover mb-9 shadow-custom`
    return (
        <div className='w-88'>  
            <div className={imgClass}></div>
            <h3 className='text-xl font-semibold mb-4'>Title of muh blog post</h3>
            <p className='text-bluegray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
    );
}

export default BlogCard;